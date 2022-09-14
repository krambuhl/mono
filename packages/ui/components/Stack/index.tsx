import type { StackProps } from './types'
import { tokens } from '../../tokens'
import styled from 'styled-components'
import { responsiveToken } from '../../lib/responsive'
import { SizeToken } from '../../tokens'

export const Stack = styled.div<StackProps>`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: ${({ direction = 'vertical' }) =>
    direction === 'horizontal' ? 'row' : 'column'};

  ${({ gap = tokens.size.x0 }) => responsiveToken<SizeToken>('gap', gap)};
`
