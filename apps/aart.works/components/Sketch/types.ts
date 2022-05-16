import type { CoreComponent } from 'ui/types/core'
import type { P5Instance } from 'react-p5-wrapper'

export interface SketchProps extends Omit<CoreComponent, 'children'> {
  setup: (p: P5Instance, store: any) => void
  draw: (p: P5Instance, store: any) => void
}
