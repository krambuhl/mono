import type { CoreComponent } from 'types/core'
import Head from 'next/head'

import { useConstants } from 'contexts/Constants'

interface Props {
  title: string
  siteName?: string
}

export function HtmlHead({ title, siteName }: Props) {
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
