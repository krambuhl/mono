import type { TextProps, TextType, TextSize } from './types'
import classNames from 'classnames'

import css from './Text.module.css'

const types = {
  heading: css.typeHeading,
  body: css.typeBody,
  data: css.typeData,
} as Record<TextType, string>

const sizes = {
  xs: css.sizeXs,
  sm: css.sizeSm,
  md: css.sizeMd,
  lg: css.sizeLg,
  xl: css.sizeXl,
} as Record<TextSize, string>

export function Text({
  as: Tag = 'span',
  type = 'body',
  size = 'md',
  className,
  children,
  ...props
}: TextProps) {
  const classList = classNames(css.root, types[type], sizes[size], className)

  return (
    <Tag className={classList} {...props}>
      {children}
    </Tag>
  )
}
