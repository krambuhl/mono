import type { ImageLockupProps } from './types'
import { SizeToken, tokens } from 'ui/tokens'
import { responsiveToken } from 'ui/lib/responsive'
import styled from 'styled-components'

export const ImageLockup = styled.div<ImageLockupProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  ${responsiveToken<SizeToken>('gap', {
    xs: tokens.size.x12,
    sm: tokens.size.x20,
  })}

  :global(img),
  :global(video) {
    width: 100%;
    border-radius: ${tokens.size.x8};
  }
`
