import { SizeToken } from '../../tokens'
import { CoreComponent } from '../../types/core'
import { PartialFor } from '../../types/utils'

export type Directions = 't' | 'r' | 'b' | 'l' | 'h' | 'v' | 'a'

export type MarginProps = {
  [MarginProperty in `m${Directions}`]?: SizeToken
}

export type PaddingProps = {
  [PaddingProperty in `p${Directions}`]?: SizeToken
}

export interface SpaceProps
  extends PartialFor<CoreComponent, 'children'>,
    MarginProps,
    PaddingProps {
  height?: SizeToken
  width?: SizeToken
}
