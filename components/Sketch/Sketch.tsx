import classNames from 'classnames'
import { useCallback } from 'react'
import dynamic from 'next/dynamic'
import type { SketchProps } from './types'
import type { P5Instance, Sketch as SketchType } from 'react-p5-wrapper'

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

export function Sketch({ setup, draw, className, ...props }: SketchProps) {
  const sketch: SketchType = useCallback(
    (p) => {
      let store = {}

      p.setup = () => {
        p.frameRate(60)
        setup && setup(p as P5Instance, store)
      }

      p.draw = () => {
        draw && draw(p as P5Instance, store)
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
