import type { SpaceProps } from './types'
import { generateSpace } from './lib'

export function Space({
  ma,
  mh,
  mv,
  mt,
  mr,
  mb,
  ml,
  pa,
  ph,
  pv,
  pt,
  pr,
  pb,
  pl,
  height,
  width,
  children,
  ...props
}: SpaceProps) {
  const margin = generateSpace({
    a: ma,
    h: mh,
    v: mv,
    t: mt,
    r: mr,
    b: mb,
    l: ml,
  })

  const padding = generateSpace({
    a: pa,
    h: ph,
    v: pv,
    t: pt,
    r: pr,
    b: pb,
    l: pl,
  })

  return (
    <div {...props}>
      {children}

      <style jsx>{`
        div {
          ${margin ? `margin: ${margin}` : ''};
          ${padding ? `padding: ${padding}` : ''};
          ${height ? `height: ${height}` : ''};
          ${width ? `width: ${width}` : ''};
        }
      `}</style>
    </div>
  )
}
