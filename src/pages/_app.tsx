import '@/styles/globals.css'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { config } from '../config'

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>      
      <QueryClientProvider client={queryClient}> 
        <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS>
          <Notifications />
          <Component {...pageProps} />
        </MantineProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}