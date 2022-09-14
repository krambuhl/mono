import type { SpaceProps } from './types'
import { generateSpace } from './lib'
import styled, { css } from 'styled-components'
import { responsiveProp } from '../../lib/responsive'

export const Space = styled.div.withConfig({
  shouldForwardProp: (prop) => !['height', 'width'].includes(prop),
})<SpaceProps>`
  ${({ ma, mh, mv, mt, mr, mb, ml }) => {
    if (ma || mh || mv || mt || mr || mb || ml) {
      const space = generateSpace({
        a: ma,
        h: mh,
        v: mv,
        t: mt,
        r: mr,
        b: mb,
        l: ml,
      })

      return css`
        ${responsiveProp('marginTop', space.top)}
        ${responsiveProp('marginBottom', space.bottom)}
        ${responsiveProp('marginLeft', space.left)}
        ${responsiveProp('marginRight', space.right)}
      `
    }
  }}

  ${({ pa, ph, pv, pt, pr, pb, pl }) => {
    if (pa || ph || pv || pt || pr || pb || pl) {
      const space = generateSpace({
        a: pa,
        h: ph,
        v: pv,
        t: pt,
        r: pr,
        b: pb,
        l: pl,
      })

      return css`
        ${responsiveProp('paddingTop', space.top)}
        ${responsiveProp('paddingBottom', space.bottom)}
        ${responsiveProp('paddingLeft', space.left)}
        ${responsiveProp('paddingRight', space.right)}
      `
    }
  }}

  ${({ height }) => (height ? responsiveProp('height', height) : '')};
  ${({ width }) => (width ? responsiveProp('width', width) : '')};
`
