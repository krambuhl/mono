import classNames from 'classnames'
import type { GridProps } from './types'

import css from './Grid.module.css'

export function Grid({ size, gap, children, className, ...props }: GridProps) {
  const gapStyle = gap
    ? ({ '--grid-gap': `${gap}px` } as React.CSSProperties)
    : {}
  const sizeStyle = size
    ? ({ '--grid-column-size': `${size}px` } as React.CSSProperties)
    : {}

  return (
    <div
      className={classNames(css.root, className)}
      style={{ ...gapStyle, ...sizeStyle }}
      {...props}
    >
      {children}
    </div>
  )
}
