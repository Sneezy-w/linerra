import { AvatarDropdown, AvatarName, Footer, Question, SelectLang } from '@/components';
import { LinkOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { SettingDrawer } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history, Link } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './requestErrorConfig';
//import { currentUser as queryCurrentUser } from '@/services/ant-design-pro/api';
import { getAccessToken, setSessionToken } from './access';
import { getUserInfo, handleGoogleCallback } from './services/service/agent';
import { getDicts } from './services/service/dict';
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

// export const initialStateConfig = {
//   loading: <PageLoading fullscreen={true} />,
// };

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  // dicts?: Record<string, API.Service.DictData[]>;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
  // fetchDicts?: () => Promise<Record<string, API.Service.DictData[]> | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const response = await getUserInfo({
        skipErrorHandler: true,
      });
      if (response.data) {
        response.data.name = 'test';
        response.data.avatar =
          'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
      }
      return response.data as API.CurrentUser;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };

  const fetchDicts = async () => {
    try {
      const response: API.R<Record<string, API.Service.DictItem[]>> = await getDicts({
        skipErrorHandler: true,
      });
      return response.data;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };

  //debugger
  const initialState = {
    fetchUserInfo,
    // fetchDicts,
    loading: true,
    settings: defaultSettings as Partial<LayoutSettings>,
  };

  // execute if not login page, otherwise return initialState
  const { location } = history;
  if (location.pathname !== loginPath) {
    // const [currentUser, dicts] = await Promise.all([
    //   fetchUserInfo(),
    //   fetchDicts()
    // ]);
    const currentUser = await fetchUserInfo();
    //const dicts = await fetchDicts();
    return {
      ...initialState,
      currentUser,
      //dicts,
      loading: false,
    };
  } else {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    if (code) {
      const result = await handleGoogleCallback(code);
      if (result.success) {
        const { idToken, accessToken, sessionId } = result.data;
        setSessionToken(accessToken, idToken, sessionId);
      }
    }

    const accessToken = getAccessToken();
    if (accessToken) {
      // const [currentUser, dicts] = await Promise.all([
      //   fetchUserInfo(),
      //   fetchDicts()
      // ]);
      const currentUser = await fetchUserInfo();
      history.push(searchParams.get('redirect') || '/');
      return {
        ...initialState,
        currentUser,
        //dicts,
        loading: false,
      };
    }
  }
  return initialState;
}

// ProLayout supported api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState, loading }) => {
  return {
    actionsRender: () => [<Question key="doc" />, <SelectLang key="SelectLang" />],
    avatarProps: {
      src: initialState?.currentUser?.avatar,
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // If not logged in, redirect to login page
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
      //console.log("Onpagechange", location.pathname);
      // if (!getAccessToken() && location.pathname !== loginPath) {
      //   history.push(loginPath);
      // }
    },
    bgLayoutImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    links: isDev
      ? [
        <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
          <LinkOutlined />
          <span>OpenAPI Document</span>
        </Link>,
      ]
      : [],
    menuHeaderRender: undefined,
    //loading: initialState ? false : true,
    // Custom 403 page
    // unAccessible: <div>unAccessible</div>,
    // Add a loading state
    childrenRender: (children) => {
      // console.log("Loading", initialState?.loading);
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {isDev && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};

/**
 * @name request configuration, can configure error handling
 * It provides a unified network request and error handling scheme based on axios and ahooks' useRequest.
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
  ...errorConfig,
  baseURL: process.env.NODE_ENV === 'production' ? process.env.UMI_APP_API_BASE_URL : '',
};
