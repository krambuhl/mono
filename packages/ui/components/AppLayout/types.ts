import React from 'react'
import { WidthToken } from '../../tokens'
import type { CoreComponent } from '../../types/core'

export interface AppLayoutProps extends CoreComponent {
  width: WidthToken
  siteName: string
  menu: React.ReactNode
  footer: React.ReactNode
}
