import classNames from 'classnames'
import type { StackProps, StackDirection, StackGap } from './types'

import css from './Stack.module.css'

const directions = {
  vertical: css.directionVertical,
  horizontal: css.directionHorizontal,
} as Record<StackDirection, string>

const gaps = {
  none: css.gapNone,
  xxs: css.gapXxs,
  xs: css.gapXs,
  sm: css.gapSm,
  md: css.gapMd,
  lg: css.gapLg,
  xl: css.gapXl,
} as Record<StackGap, string>

export function Stack({
  direction = 'vertical',
  gap = 'md',
  children,
  className,
  ...props
}: StackProps) {
  const classList = classNames(
    css.root,
    directions[direction],
    gaps[gap],
    className
  )

  return (
    <div className={classList} {...props}>
      {children}
    </div>
  )
}
