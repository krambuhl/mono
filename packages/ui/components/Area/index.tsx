import styled from 'styled-components'
import { tokens } from '../../tokens'
import type { AreaProps } from './types'

export const Area = styled.div<AreaProps>`
  margin: auto;
  max-width: ${({ width = tokens.width.x768 }) => width};
  width: 100%;
`
