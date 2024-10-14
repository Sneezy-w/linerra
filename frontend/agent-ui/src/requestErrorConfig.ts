import type { RequestOptions } from '@@/plugin-request/request';
import type { RequestConfig } from '@umijs/max';
import { message, notification } from 'antd';
import { clearSessionToken, getAccessToken, getIdToken, getSessionId, isNeedLogin, isNeedRefreshToken, isTokenExpired, setSessionToken } from './access';
import { history, Link } from '@umijs/max';
import { refreshToken } from './services/service/agent';
import _ from 'lodash';

const loginPath = '/user/login';

// Error handling scheme: error type
enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}
// Response data format agreed with backend
interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: string;
  errorMessage?: string;
  showType?: ErrorShowType;
}

const handleLoginExpired = _.debounce(() => {
  message.error('Login expired, please login again.');
  clearSessionToken();
  history.push(loginPath);
}, 250, { leading: true, trailing: false });

const handleReturnToLogin = _.debounce(() => {
  //message.error('Login expired, please login again.');
  //clearSessionToken();
  history.push(loginPath);
}, 250, { leading: true, trailing: false });

let isRefreshing = false;
let refreshSubscribers: Array<(token: string) => void> = [];

function onRefreshed(token: string) {
  refreshSubscribers.map(cb => cb(token));
}

function addRefreshSubscriber(cb: (token: string) => void) {
  refreshSubscribers.push(cb);
}

/**
 * @name Error handling
 * pro's own error handling, can make your own changes here
 * @doc https://umijs.org/docs/max/request#配置
 */
export const errorConfig: RequestConfig = {
  // Error handling: umi@3's error handling scheme.
  errorConfig: {
    // Error thrower
    errorThrower: (res) => {
      const { success, data, errorCode, errorMessage, showType } =
        res as unknown as ResponseStructure;
      if (!success) {
        const error: any = new Error(errorMessage);
        error.name = 'BizError';
        error.info = { errorCode, errorMessage, showType, data };
        throw error; // Throw your own error
      }
    },
    // Error receiver and handler
    errorHandler: (error: any, opts: any) => {
      if (opts?.skipErrorHandler) throw error;
      // The error thrown by our errorThrower.
      if (error.name === 'BizError') {
        const errorInfo: ResponseStructure | undefined = error.info;
        if (errorInfo) {
          const { errorMessage, errorCode } = errorInfo;
          switch (errorInfo.showType) {
            case ErrorShowType.SILENT:
              // do nothing
              break;
            case ErrorShowType.WARN_MESSAGE:
              message.warning(errorMessage);
              break;
            case ErrorShowType.ERROR_MESSAGE:
              message.error(errorMessage);
              break;
            case ErrorShowType.NOTIFICATION:
              notification.open({
                description: errorMessage,
                message: errorCode,
              });
              break;
            case ErrorShowType.REDIRECT:
              // TODO: redirect
              break;
            default:
              message.error(errorMessage);
          }
        }
      } else if (error.response) {
        // Axios's error
        // The request was successful and the server also responded with a status code, but the status code is out of the 2xx range
        //message.error(`Response status:${error.response.status}`);
        //console.log(error.response);
        if (error.response.status === 401 && !opts?.skipLogout) {
          // message.error("Login expired, please login again.");
          // clearSessionToken();
          // history.push(loginPath);
          handleLoginExpired();
          return;
        }
        const errorInfo: ResponseStructure | undefined = error.response.data;
        if (errorInfo) {
          const { errorMessage, errorCode } = errorInfo;
          switch (errorInfo.showType) {
            case ErrorShowType.SILENT:
              // do nothing
              break;
            case ErrorShowType.WARN_MESSAGE:
              message.warning(errorMessage);
              break;
            case ErrorShowType.ERROR_MESSAGE:
              message.error(errorMessage);
              break;
            case ErrorShowType.NOTIFICATION:
              notification.open({
                description: errorMessage,
                message: errorCode,
              });
              break;
            case ErrorShowType.REDIRECT:
              // TODO: redirect
              break;
            default:
              message.error(errorMessage);
          }
        }
      } else if (error.request) {
        // The request was successfully sent, but no response was received
        // \`error.request\` is an instance of XMLHttpRequest in the browser,
        // and in node.js it is an instance of http.ClientRequest
        message.error('None response! Please retry.');
      } else {
        // There was an error sending the request
        if (error.name === "TokenExpiredError") {
          // clearSessionToken();
          // message.error('Login expired, please login again.');
          // history.push(loginPath);
          handleLoginExpired();
        } else if (error.name === "ReturnToLoginError") {
          handleReturnToLogin();
        } else {
          message.error('Request error, please retry.');
        }
      }
    },
  },

  // Request interceptor
  requestInterceptors: [
    async (config: RequestConfig) => {
      //console.log("requestInterceptor", config);
      // Intercept request configuration for personalized processing.
      //const url = config?.url?.concat('?token = 123');
      const headers = config.headers;
      const isToken = headers?.['isToken'];
      if (isToken !== false) {
        if (isNeedLogin()) {
          //clearSessionToken();
          //history.push(loginPath);
          const needLoginError = new Error("Please login.");
          if (isTokenExpired()) {
            needLoginError.name = "TokenExpiredError";
          } else {
            needLoginError.name = "ReturnToLoginError";
          }
          throw needLoginError;
          //return config;
        }
        if (config?.url?.includes('api/agents/refreshToken') && config?.headers?.['Authorization']) {
          return config;
        }
        const accessToken = getAccessToken();
        const idToken = getIdToken();
        const sessionId = getSessionId();
        config.headers = {
          ...config.headers,
          'Authorization': `Bearer ${accessToken}`,
          'Identity-Token': idToken || '',
          'Session-Id': sessionId || '',
        };

        if (isNeedRefreshToken() && !headers?.refreshToken) {
          //console.log("isNeedRefreshToken");
          if (!isRefreshing) {
            isRefreshing = true;
            try {
              const refreshResult: API.R<API.Service.RefreshTokenResult> = await refreshToken();
              if (refreshResult.success && refreshResult.data) {
                const { accessToken, idToken } = refreshResult.data;
                setSessionToken(accessToken, idToken);
                onRefreshed(accessToken);
              }
            } catch (error) {
              // Handle refresh token error
              handleLoginExpired();
              return Promise.reject(error);
            } finally {
              isRefreshing = false;
              refreshSubscribers = [];
            }
          }

          // Wait for the token to be refreshed
          return new Promise((resolve) => {
            addRefreshSubscriber((token: string) => {
              config.headers = {
                ...config.headers,
                'Authorization': `Bearer ${token}`,
              };
              resolve(config);
            });
          });
        }
      }


      return { ...config };
    },
  ],

  // Response interceptor
  responseInterceptors: [
    (response) => {
      // Intercept response data for personalized processing
      // const { data } = response as unknown as ResponseStructure;

      // if (data?.success === false) {
      //   message.error('Request failed!');
      // }

      return response;
    },
  ],
};
