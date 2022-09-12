import { useCallback } from 'react'
import dynamic from 'next/dynamic'
import type { SketchProps } from './types'
import type { P5Instance, Sketch as SketchType } from 'react-p5-wrapper'

const SketchWrapper = dynamic(
  async () => {
    const mod = await import('react-p5-wrapper')
    return mod.ReactP5Wrapper
  },
  {
    ssr: false,
    loading: () => (
      <>
        <div>Loading</div>
        <style jsx>{`
          div {
            align-self: center;
            font-size: 0.8em;
            font-weight: bold;
            text-transform: uppercase;
          }
        `}</style>
      </>
    ),
  }
)

export function Sketch({ setup, draw, ...props }: SketchProps) {
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
    <div {...props}>
      <SketchWrapper sketch={sketch} />

      <style jsx>{`
        div {
          aspect-ratio: 1;
        }

        div :global(canvas) {
          display: block;
          height: auto !important;
          width: 100% !important;
        }
      `}</style>
    </div>
  )
}
