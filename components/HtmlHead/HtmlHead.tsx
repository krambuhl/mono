import Head from 'next/head'
import type { HtmlHeadProps } from './types'

import { useConstants } from 'contexts/Constants'

export function HtmlHead({ title, siteName }: HtmlHeadProps) {
  const { site } = useConstants()

  const siteTitle = siteName ?? site.name
  const pageTitle = title ? ` — ${title}` : ''
  const fullTitle = `${siteTitle}${pageTitle}`

  return (
    <Head>
      <title>{fullTitle}</title>
    </Head>
  )
}
