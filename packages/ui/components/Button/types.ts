import { CoreComponent } from '../../types/core'

export interface ButtonProps extends CoreComponent, Partial<HTMLButtonElement> {
  href?: string
}
