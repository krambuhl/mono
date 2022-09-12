import classNames from 'classnames'
import NextLink from 'next/link'
import { useDataContext } from 'ui/components/DataContext'
import { Stack } from 'ui/components/Stack'
import { Space } from 'ui/components/Space'
import { HeadingText } from 'ui/components/Text'
import { Area } from 'ui/components/Area'

import type { AppLayoutProps } from './types'
import { tokens } from 'ui/tokens'

export function AppLayout({ children, className, ...props }: AppLayoutProps) {
  const {
    constants: { SITE_NAME },
  } = useDataContext()

  return (
    <Stack
      gap={tokens.size.x0}
      className={classNames('app-layout--root', className)}
      {...props}
    >
      <Area width={tokens.width.x1280}>
        <Stack
          as="header"
          direction="horizontal"
          className="app-layout--heading"
        >
          <NextLink href="/">
            <a>
              <Space pa={tokens.size.x20}>
                <HeadingText as="h1" size="xs">
                  {SITE_NAME}
                </HeadingText>
              </Space>
            </a>
          </NextLink>

          <div />
        </Stack>
      </Area>

      <main className="app-layout--main">
        <Space pv={tokens.size.x48}>{children}</Space>
      </main>

      <style jsx>{`
        :global(.app-layout--root) {
          min-height: 100vh;
        }

        :global(.app-layout--heading) {
          justify-content: space-between;
          border-bottom: ${tokens.size.x2} solid var(--bg-alt-default);
        }

        :global(.app-layout--main) {
          flex-grow: 1;
          width: 100%;
        }
      `}</style>
    </Stack>
  )
}
