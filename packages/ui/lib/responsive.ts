import { CSSProperties } from 'react'
import { css } from 'styled-components'

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 736,
  lg: 992,
  xl: 1248,
} as const

export type Breakpoint = keyof typeof breakpoints
export type Responsive<T = string> = Partial<Record<Breakpoint, T>>
export type LazyResponsive<T> = T | Responsive<T>

export function convertToResponsive<T>(
  value: LazyResponsive<T>
): Responsive<T> {
  if (
    value !== null &&
    typeof value === 'object' &&
    ('xs' in value ||
      'sm' in value ||
      'md' in value ||
      'lg' in value ||
      'xl' in value)
  ) {
    return value
  }

  if (typeof value === 'string') {
    return { xs: value }
  }

  return {}
}

function createPropertyQuery({
  name,
  value,
  breakpoint,
}: {
  name: string
  value?: string
  breakpoint: Breakpoint
}) {
  return value
    ? css`
        @media (min-width: ${breakpoints[breakpoint]}px) {
          ${name}: ${value};
        }
      `
    : undefined
}

export function responsiveProp(
  rawName: keyof CSSProperties,
  rawValues: string | Responsive<string>
) {
  const name = rawName.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())
  const values = convertToResponsive<string>(rawValues)
  return css`
    ${values.xs ? `${name}: ${values.xs};` : ''}
    ${createPropertyQuery({ name, value: values.sm, breakpoint: 'sm' })}
    ${createPropertyQuery({ name, value: values.md, breakpoint: 'md' })}
    ${createPropertyQuery({ name, value: values.lg, breakpoint: 'lg' })}
    ${createPropertyQuery({ name, value: values.xl, breakpoint: 'xl' })}
  `
}

function createTokenQuery<T>({
  name,
  token,
  breakpoint,
}: {
  name: keyof CSSProperties
  token?: T
  breakpoint: Breakpoint
}) {
  return createPropertyQuery({ name, value: token as string, breakpoint })
}

export function responsiveToken<T>(
  name: keyof CSSProperties,
  rawValues: LazyResponsive<T>
) {
  const values = convertToResponsive<T>(rawValues)
  return css`
    ${values.xs ? `${name}: ${values.xs};` : ''}
    ${createTokenQuery<T>({ name, token: values.sm, breakpoint: 'sm' })}
    ${createTokenQuery<T>({ name, token: values.md, breakpoint: 'md' })}
    ${createTokenQuery<T>({ name, token: values.lg, breakpoint: 'lg' })}
    ${createTokenQuery<T>({ name, token: values.xl, breakpoint: 'xl' })}
  `
}
