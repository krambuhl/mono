import { CoreComponent } from 'types/core'

export type StackDirection = 'vertical' | 'horizontal'
export type StackGap = 'none' | 'xs' | 'sm' | 'md' | 'lg'

export interface StackProps extends CoreComponent {
  direction?: StackDirection
  gap?: StackGap
}
