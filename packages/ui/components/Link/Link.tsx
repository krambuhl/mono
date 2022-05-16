import NextLink from 'next/link'
import classNames from 'classnames'
import type { LinkProps } from './types'

import css from './Link.module.css'

export function Link({ href, children, className, ...props }: LinkProps) {
  const classList = classNames(css.root, className)

  return (
    <NextLink href={href} passHref>
      <a className={classList} {...props}>
        {children}
      </a>
    </NextLink>
  )
}
