import Head from 'next/head'
import type { AppProps } from 'next/app'
import { AppLayout } from 'components/AppLayout'
import { ConstantsContext } from 'contexts/Constants'

import constants, { SITE_NAME } from '../constants'

import 'the-new-css-reset/css/reset.css'
import 'styles/globals.css'
import 'styles/tokens.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ConstantsContext.Provider value={constants}>
      <AppLayout siteName={SITE_NAME}>
        <Head>
          <title>{SITE_NAME}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Component {...pageProps} />
      </AppLayout>
    </ConstantsContext.Provider>
  )
}

export default CustomApp
