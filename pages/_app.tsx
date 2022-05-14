import Head from 'next/head'
import type { AppProps } from 'next/app'

import { AppLayout } from 'components/AppLayout'
import { ConstantsContext } from 'contexts/Constants'

import * as constants from '../constants'

import 'the-new-css-reset/css/reset.css'
import 'styles/globals.css'
import 'styles/tokens.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ConstantsContext.Provider value={constants}>
      <AppLayout>
        <Head>
          <title>{constants.site.name}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Component {...pageProps} />
      </AppLayout>
    </ConstantsContext.Provider>
  )
}

export default CustomApp
