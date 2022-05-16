import Head from 'next/head'
import type { AppProps } from 'next/app'
import { AppLayout } from 'ui/components/AppLayout'
import { DataContext } from 'ui/components/DataContext'

import constants, { SITE_NAME } from '../constants'

import 'the-new-css-reset/css/reset.css'
import 'styles/globals.css'
import 'styles/tokens.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <DataContext.Provider value={{ constants }}>
      <AppLayout>
        <Head>
          <title>{SITE_NAME}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Component {...pageProps} />
      </AppLayout>
    </DataContext.Provider>
  )
}

export default CustomApp
