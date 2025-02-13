'use client';

import { ConfigProvider } from 'antd';
import { useCallback, useMemo } from 'react';
import { ToastContainer } from 'react-toastify';
import { StyleProvider } from '@ant-design/cssinjs';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { QueryClient, QueryClientProvider, QueryCache, MutationCache } from '@tanstack/react-query';
import { Session } from '../interfaces/global.interface';
import { globalTheme } from '../configs/theme.config';

export interface RootProviderProps {
  session: Session | null;
}

export default function RootProvider({ children }: React.PropsWithChildren<RootProviderProps>) {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
        queryCache: new QueryCache(),
        mutationCache: new MutationCache(),
      }),
    [],
  );

  const initializeState = useCallback((_params: MutableSnapshot) => {}, []);

  return (
    <RecoilRoot initializeState={initializeState}>
      <QueryClientProvider client={queryClient}>
        <AntdRegistry>
          <StyleProvider layer>
            <ConfigProvider theme={globalTheme}>{children}</ConfigProvider>
            <ToastContainer limit={3} />
          </StyleProvider>
        </AntdRegistry>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
