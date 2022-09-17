import NextImage from 'next/future/image'
import type { ImageLockupProps } from './types'
import { SizeToken, tokens } from 'ui/tokens'
import { responsiveProp, responsiveToken } from 'ui/lib/responsive'
import styled from 'styled-components'
import { useInterval } from 'hooks/useInterval'
import { useState } from 'react'

export const Image = styled(NextImage).attrs({
  width: 240,
  height: 240,
  sizes: '(max-width: 448px) 100vw, (max-width: 768px) 33vw, 182px',
  priority: true,
})`
  width: 100%;
  height: auto;
  aspect-ratio: 1;
`

export const StyledImageLockup = styled.div<
  ImageLockupProps & { activeIndex: number }
>`
  display: grid;
  width: 100%;
  ${responsiveToken<SizeToken>('gap', {
    xs: tokens.size.x12,
    sm: tokens.size.x20,
  })};
  ${responsiveProp('grid-template-columns', {
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
  })}

  ${Image} {
    width: 100%;
    border-radius: ${tokens.size.x8};
  }

  ${Image}:nth-child(${({ activeIndex }) => activeIndex}) {
    ${responsiveToken('display', {
      xs: 'block',
      sm: 'block',
    })}
  }

  ${Image}:not(:nth-child(${({ activeIndex }) => activeIndex})) {
    ${responsiveToken('display', {
      xs: 'none',
      sm: 'block',
    })}
  }
`

export function ImageLockup(props: StyledImageLockup) {
  const [activeIndex, setActiveIndex] = useState<number>(1)
  useInterval(() => {
    setActiveIndex(activeIndex >= 4 ? 1 : activeIndex + 1)
  }, Math.random() * 2000)
  return <StyledImageLockup activeIndex={activeIndex} {...props} />
}
