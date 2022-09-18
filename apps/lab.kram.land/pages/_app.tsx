import Head from 'next/head'
import type { AppProps } from 'next/app'

import { DataContext } from 'ui/components/DataContext'
import { HtmlTitle } from 'ui/components/HtmlTitle'
import { AppLayout } from 'ui/components/AppLayout'

import { constants } from '../constants'

import 'the-new-css-reset/css/reset.css'
import 'ui/tokens/tokens.css'
import 'styles/globals.css'
import 'styles/tokens.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <DataContext.Provider value={{ constants }}>
      <AppLayout showHeader>
        <HtmlTitle />

        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Component {...pageProps} />
      </AppLayout>
    </DataContext.Provider>
  )
}

export default CustomApp
