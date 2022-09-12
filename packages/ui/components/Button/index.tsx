import classNames from 'classnames'
import { tokens } from '../../tokens'
import type { ButtonProps } from './types'

export function Button({ href, children, className, ...props }: ButtonProps) {
  const Tag = href ? 'a' : 'button'
  const addlProps = href ? { href } : {}

  return (
    <Tag className={classNames('button', className)} {...addlProps} {...props}>
      {children}

      <style jsx>{`
        .button {
          display: inline-block;
          cursor: pointer;
          padding: ${tokens.size.x12} ${tokens.size.x24};
          background-color: ${tokens.bg.base.default};
          border: 2px solid ${tokens.fg.muted.default};
          color: ${tokens.fg.muted.default};
          border-radius: ${tokens.size.x8};
        }

        .button:hover {
          background-color: ${tokens.bg.base.hover};
          border-color: ${tokens.fg.muted.hover};
          color: ${tokens.fg.muted.hover};
        }

        .button:active {
          background-color: ${tokens.bg.base.pressed};
          border-color: ${tokens.fg.muted.pressed};
          color: ${tokens.fg.muted.pressed};
        }
      `}</style>
    </Tag>
  )
}
