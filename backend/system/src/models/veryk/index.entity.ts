
export interface ApiResponse {
  request_id: string;
  status: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: any;
  message: string;
  code: number;
  query: {
    action: string;
    format: string;
    id: string;
    timestamp: number;
    sign: string;
  };
  elapsed: number;
}

