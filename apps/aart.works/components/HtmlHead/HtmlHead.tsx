import Head from 'next/head'
import type { HtmlHeadProps } from './types'
import { useConstants } from 'contexts/Constants'

export function HtmlHead({ title, siteName }: HtmlHeadProps) {
  const { SITE_NAME } = useConstants()

  const siteTitle = siteName ?? SITE_NAME
  const pageTitle = title ? ` — ${title}` : ''
  const fullTitle = `${siteTitle}${pageTitle}`

  return (
    <Head>
      <title>{fullTitle}</title>
    </Head>
  )
}
