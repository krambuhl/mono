import classNames from 'classnames'
import type { AppLayoutProps } from './types'

import { useConstants } from 'contexts/Constants'
import { Text } from 'components/Text'
import { Link } from 'components/Link'

import css from './AppLayout.module.css'

export function AppLayout({ children, className, ...props }: AppLayoutProps) {
  const { site } = useConstants()

  return (
    <div className={classNames(css.root, className)} {...props}>
      <header className={css.header}>
        <Link href="/">
          <Text type="heading" size="xs">
            {site.name}
          </Text>
        </Link>
      </header>

      <main className={css.main}>{children}</main>
    </div>
  )
}
