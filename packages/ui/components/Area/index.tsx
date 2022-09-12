import { tokens } from '../../tokens'
import type { AreaProps } from './types'

export function Area({
  width = tokens.width.x768,
  children,
  ...props
}: AreaProps) {
  return (
    <div {...props}>
      {children}

      <style jsx>{`
        div {
          margin: auto;
          max-width: ${width};
          width: 100%;
        }
      `}</style>
    </div>
  )
}
