import React from 'react'
import type { CoreComponent } from 'types/core'

export type TextType = 'heading' | 'body' | 'data'
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface TextProps extends CoreComponent {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  type?: TextType
  size?: TextSize
}
