import Head from 'next/head'
import type { HtmlHeadProps } from './types'

import { useDataContext } from '../DataContext'

export function HtmlHead({ title }: HtmlHeadProps) {
  const {
    constants: { SITE_NAME },
  } = useDataContext()

  const pageTitle = title ? ` — ${title}` : ''
  const fullTitle = `${SITE_NAME}${pageTitle}`

  return (
    <Head>
      <title>{fullTitle}</title>
    </Head>
  )
}
