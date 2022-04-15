import classNames from 'classnames'

import { CoreComponent } from 'types/core'

import css from './Grid.module.css'

interface GridProps extends CoreComponent {
  size?: number
}

export function Grid({ size, children, className, ...props }: GridProps) {
  const style = size ? { '--grid-column-size': `${size}px` } : {}

  return (
    <div className={classNames(css.root, className)} style={style} {...props}>
      {children}
    </div>
  )
}
