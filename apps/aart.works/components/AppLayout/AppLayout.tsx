import classNames from 'classnames'
import type { AppLayoutProps } from './types'
import { Text } from 'ui/components/Text'
import { Link } from 'ui/components/Link'

import css from './AppLayout.module.css'

export function AppLayout({
  siteName,
  children,
  className,
  ...props
}: AppLayoutProps) {
  return (
    <div className={classNames(css.root, className)} {...props}>
      <header className={css.header}>
        <Link href="/">
          <Text type="heading" size="xs">
            {siteName}
          </Text>
        </Link>
      </header>

      <main className={css.main}>{children}</main>
    </div>
  )
}
