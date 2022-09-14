import { LazyResponsive } from '../../lib/responsive'
import { SizeToken } from '../../tokens'
import { CoreComponent } from '../../types/core'

export type StackDirection = 'vertical' | 'horizontal'

export interface StackProps extends CoreComponent {
  as?: 'div' | 'section' | 'header' | 'footer'
  direction?: StackDirection
  gap?: LazyResponsive<SizeToken>
}
