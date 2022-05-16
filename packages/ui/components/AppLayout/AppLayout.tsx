import classNames from 'classnames'
import type { AppLayoutProps } from './types'
import { Text } from '../Text'
import { Link } from '../Link'

import { useDataContext } from '../DataContext'

import css from './AppLayout.module.css'

export function AppLayout({ children, className, ...props }: AppLayoutProps) {
  const {
    constants: { SITE_NAME },
  } = useDataContext()

  return (
    <div className={classNames(css.root, className)} {...props}>
      <header className={css.header}>
        <Link href="/">
          <Text type="heading" size="xs">
            {SITE_NAME}
          </Text>
        </Link>
      </header>

      <main className={css.main}>{children}</main>
    </div>
  )
}
