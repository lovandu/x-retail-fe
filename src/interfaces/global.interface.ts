export interface Session {
  userName: string;
  accessToken: string;
  refreshToken: string;
}

export interface IErrorNextPageParams {
  reset: () => void;
  error: Error & { digest?: string };
}

export type AnyFunction<T extends any = any> = (...args: Array<any>) => T;
