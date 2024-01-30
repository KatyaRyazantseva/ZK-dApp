import Image from "next/image";
import './globals.css'
import { WagmiConfig, createClient, configureChains, goerli } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications';

// We'll just be using Goerli testnet for now
const { chains, provider, webSocketProvider } = configureChains(
  [goerli],
  [publicProvider()],
)
 
const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
})

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <MantineProvider withNormalizeCSS>
        <Notifications />
        <Component {...pageProps} />
      </MantineProvider>
    </WagmiConfig>
  );
}
