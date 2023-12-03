import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, goerli, mainnet, optimism, polygon, polygonMumbai, avalanche } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

// import Layout from '../components/Layout/Layout'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    avalanche,
    polygonMumbai,

    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [polygonMumbai] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  projectId: '78c5936e9f0327b1cf03370a5b37d175',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export default function App({ Component, pageProps }: AppProps) {
  return (

    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <ChakraProvider>

          <Component {...pageProps} />

        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}