import { CoreComponent } from '../../types/core'

export type StackDirection = 'vertical' | 'horizontal'
export type StackGap = 'none' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface StackProps extends CoreComponent {
  direction?: StackDirection
  gap?: StackGap
}
