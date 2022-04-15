import Head from 'next/head'
import type { AppProps } from 'next/app'

import { AppLayout } from 'components/AppLayout'
import { TransportProvider } from 'contexts/TransportContext'

import 'styles/globals.css'
import 'styles/tokens.css'

interface ProviderProps {
  children: React.ReactNode
}

function Providers({ children }: ProviderProps) {
  return <TransportProvider>{children}</TransportProvider>
}

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <AppLayout>
        <Head>
          <title>Formulas</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Component {...pageProps} />
      </AppLayout>
    </Providers>
  )
}

export default CustomApp
