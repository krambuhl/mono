import styled from 'styled-components'
import type { AppLayoutProps } from './types'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

const Main = styled.main`
  flex-grow: 1;
  width: 100%;
`

export function AppLayout({ children, ...props }: AppLayoutProps) {
  return (
    <Root {...props}>
      <Main id="content">{children}</Main>
    </Root>
  )
}

AppLayout.StyledRoot = Root
