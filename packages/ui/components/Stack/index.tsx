import type { StackProps } from './types'
import { tokens } from '../../tokens'
import classNames from 'classnames'

export function Stack({
  as: Tag = 'div',
  direction = 'vertical',
  gap = tokens.size.x0,
  children,
  className,
  ...props
}: StackProps) {
  return (
    <Tag className={classNames('stack', className)} {...props}>
      {children}

      <style jsx>{`
        .stack {
          display: flex;
          align-items: center;
          width: 100%;
          flex-direction: ${direction === 'horizontal' ? 'row' : 'column'};
          gap: ${gap};
        }
      `}</style>
    </Tag>
  )
}
