import classNames from 'classnames'
import { useCallback } from 'react'
import dynamic from 'next/dynamic'
import type { CoreComponent } from 'types/core'
import type { P5Instance } from 'react-p5-wrapper'

import css from './Sketch.module.css'

const SketchWrapper = dynamic(
  async () => {
    const mod = await import('react-p5-wrapper')
    return mod.ReactP5Wrapper
  },
  {
    ssr: false,
    loading: () => <div className={css.loader}>Loading</div>,
  }
)

interface SketchProps extends Omit<CoreComponent, 'children'> {
  setup: (p: P5Instance, store: any) => void
  draw: (p: P5Instance, store: any) => void
}

export function Sketch({ setup, draw, className, ...props }: SketchProps) {
  const sketch = useCallback(
    (p: P5Instance) => {
      let store = {}

      p.setup = () => {
        p.frameRate(60)
        setup && setup(p, store)
      }

      p.draw = () => {
        draw && draw(p, store)
      }
    },
    [setup, draw]
  )

  return (
    <div className={classNames(css.root, className)} {...props}>
      <SketchWrapper sketch={sketch} />
    </div>
  )
}
