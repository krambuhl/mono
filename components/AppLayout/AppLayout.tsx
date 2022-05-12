import Link from 'next/link'
import classNames from 'classnames'
import type { CoreComponent } from 'types/core'

import { useConstants } from 'contexts/Constants'

import css from './AppLayout.module.css'

interface Props extends CoreComponent {}

export function AppLayout({ children, className, ...props }: Props) {
  const { site } = useConstants()
  return (
    <div className={classNames(css.root, className)} {...props}>
      <header className={css.header}>
        <Link href="/" passHref>
          <a>{site.name}</a>
        </Link>
      </header>
      <main className={css.main}>{children}</main>
    </div>
  )
}
