import classNames from 'classnames'
import NextLink from 'next/link'
import styled from 'styled-components'

import { useDataContext } from '../DataContext'
import { Stack } from '../Stack'
import { Space } from '../Space'
import { HeadingText } from '../Text'
import { Area } from '../Area'
import { tokens } from '../../tokens'

import type { AppLayoutProps } from './types'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`
/* @ts-ignore */
const Header = styled(Stack)`
  justify-content: space-between;
  border-bottom: ${tokens.size.x2} solid ${tokens.bg.alt.default};
`

const Main = styled.main`
  flex-grow: 1;
  width: 100%;
`

const Footer = styled.footer``

export function AppLayout({
  width = tokens.width.x1280,
  siteName,
  menu,
  footer,
  children,
  ...props
}: AppLayoutProps) {
  return (
    <Root {...props}>
      {!!siteName && (
        <Header as="header" direction="horizontal">
          <NextLink href="/">
            <a>
              <Space pa={tokens.size.x20}>
                <HeadingText as="h1" size="xs">
                  {siteName}
                </HeadingText>
              </Space>
            </a>
          </NextLink>

          {!!menu && <div />}
        </Header>
      )}

      <Main id="content">
        <Space pv={tokens.size.x48}>{children}</Space>
      </Main>

      {!!footer && <Footer />}
    </Root>
  )
}

AppLayout.StyledRoot = Root
