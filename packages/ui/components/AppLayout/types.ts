import React from 'react'
import { WidthToken } from '../../tokens'
import type { CoreComponent } from '../../types/core'

export interface AppLayoutProps extends CoreComponent {
  width?: WidthToken
  showHeader?: boolean
  showFooter?: boolean
  menu?: React.ReactNode
  footer?: React.ReactNode
}
