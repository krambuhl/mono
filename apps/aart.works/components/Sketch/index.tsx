import { useCallback, useState } from 'react'
import dynamic from 'next/dynamic'
import type { SketchProps } from './types'
import type { P5Instance, Sketch as SketchType } from 'react-p5-wrapper'
import styled from 'styled-components'
import { BodyText } from 'ui/components/Text'
import { tokens } from 'ui/tokens'

const Loading = styled(BodyText)`
  align-self: center;
`

const StyledSketch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aspect-ratio: 1;

  canvas {
    display: block;
    height: auto !important;
    width: 100% !important;
    background-color: black;
    border-radius: ${tokens.size.x12};
  }
`

const StyledFrame = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${tokens.size.x4};
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

type PlayState = 'play' | 'pause'

export function Sketch({ setup, draw, ...props }: SketchProps) {
  const [frame, setFrame] = useState(0)
  const [state, setState] = useState<PlayState>('play')

  const toggleState = useCallback(
    () => setState(state === 'play' ? 'pause' : 'play'),
    [state]
  )

  const sketch: SketchType = useCallback(
    (p) => {
      let store = new Map()

      p.setup = () => {
        p.frameRate(60)
        setup && setup(p as P5Instance, store)
      }

      p.draw = () => {
        if (p.isLooping()) {
          setFrame(p.frameCount)
          draw && draw(p as P5Instance, store)
        }
      }
    },
    [setup, draw, state]
  )

  return (
    <StyledSketch {...props}>
      <SketchWrapper sketch={sketch} />
      {/* <StyledFrame>
        <BodyText size="xs">frame: {frame}</BodyText>
      </StyledFrame> */}
    </StyledSketch>
  )
}
