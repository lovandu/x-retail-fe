'use client';

import { ConfigProvider } from 'antd';
import { useCallback, useMemo } from 'react';
import { ToastContainer } from 'react-toastify';
import { StyleProvider } from '@ant-design/cssinjs';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { QueryClient, QueryClientProvider, QueryCache, MutationCache } from '@tanstack/react-query';
import { createTheme, ThemeProvider, Button } from '@mui/material';
import { globalTheme } from '@/src/configs/theme.config';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
        },
      },
    },
  },
});

export interface RootProviderProps {
  // session?: Session | null;
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
            <ConfigProvider theme={globalTheme}>
              <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </ConfigProvider>
            <ToastContainer limit={3} />
          </StyleProvider>
        </AntdRegistry>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
