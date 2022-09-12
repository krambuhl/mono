import NextLink from 'next/link'
import type { LinkProps } from './types'

export function Link({ href, children, ...props }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>{children}</a>

      <style jsx>{`
        a {
          text-decoration: underline;

          &:hover {
            text-decoration-thickness: 0.2em;
          }

          &:active {
            color: var(--primary-action-default);
            text-decoration-color: var(--primary-action-default);
          }
        }
      `}</style>
    </NextLink>
  )
}
