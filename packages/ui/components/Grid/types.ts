import { CSSProperties } from 'react'
import { SizeToken, WidthToken } from '../../tokens'
import { CoreComponent } from '../../types/core'

export interface GridProps extends CoreComponent {
  gap?: SizeToken
  columns?: CSSProperties['gridTemplateColumns']
  rows?: CSSProperties['gridTemplateRows']
}

export interface AutoGridProps extends CoreComponent {
  gap?: SizeToken
  width: WidthToken
}
