import type { Directions } from './types'
import { SizeToken } from '../../tokens'

export function generateSpace({
  a,
  h,
  v,
  t,
  r,
  b,
  l,
}: { [Prop in Directions]?: SizeToken }) {
  if (a) return a
  if (h && v) return `${v} ${h}`
  if (v) return `${v} 0`
  if (h) return `0 ${h}`
  if (t || r || b || l) return `${t} ${r} ${b} ${l}`
  return ``
}
