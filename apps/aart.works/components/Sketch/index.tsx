import { useCallback } from 'react'
import dynamic from 'next/dynamic'
import type { SketchProps } from './types'
import type { P5Instance, Sketch as SketchType } from 'react-p5-wrapper'
import styled from 'styled-components'
import { BodyText } from 'ui/components/Text'

const Loading = styled(BodyText)`
  align-self: center;
`

const StyledSketch = styled.div`
  display: flex;
  justify-content: center;
  aspect-ratio: 1;

  canvas {
    display: block;
    height: auto !important;
    width: 100% !important;
  }
`

const SketchWrapper = dynamic(
  async () => {
    const mod = await import('react-p5-wrapper')
    return mod.ReactP5Wrapper
  },
  {
    ssr: false,
    loading: () => <Loading size="sm">loading...</Loading>,
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
    <StyledSketch {...props}>
      <SketchWrapper sketch={sketch} />
    </StyledSketch>
  )
}
