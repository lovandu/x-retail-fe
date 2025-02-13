'use client';

import { useCallback, useMemo } from 'react';
import Cookies, { CookieGetOptions, CookieSetOptions } from 'universal-cookie';

export default function useCookies() {
  const cookies = useMemo(() => new Cookies(), []);

  const getCookie = useCallback(
    (name: string, options?: CookieGetOptions) => cookies.get(name, options),
    [cookies],
  );

  const getAllCookies = useCallback(
    (options?: CookieGetOptions) => cookies.getAll(options),
    [cookies],
  );

  const setCookie = useCallback(
    (name: string, value: any, options?: CookieSetOptions) => cookies.set(name, value, options),
    [cookies],
  );

  const removeCookie = useCallback(
    (name: string, options?: CookieSetOptions) => cookies.remove(name, options),
    [cookies],
  );

  const clearCookie = useCallback(
    (keys?: Array<string>) => {
      if (keys?.length) {
        keys.forEach((key) => cookies.remove(key));
        return;
      }

      const allKeys = getAllCookies();
      Object.keys(allKeys).forEach((key) => cookies.remove(key));
    },
    [cookies, getAllCookies],
  );

  return {
    cookies,
    getCookie,
    setCookie,
    clearCookie,
    removeCookie,
    getAllCookies,
  };
}
