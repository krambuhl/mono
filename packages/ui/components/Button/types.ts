import { CoreComponent } from '../../types/core'

export interface ButtonProps extends CoreComponent {
  href?: string
  onClick?: (ev: React.MouseEvent) => void
}
