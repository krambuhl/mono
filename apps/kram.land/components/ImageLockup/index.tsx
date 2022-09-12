import type { ImageLockupProps } from './types'
import { tokens } from 'ui/tokens'

export function ImageLockup({ children, ...props }: ImageLockupProps) {
  return (
    <div {...props}>
      {children}

      <style jsx>{`
        div {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: ${tokens.size.x24};
        }

        div :global(img),
        div :global(video) {
          width: 100%;
          border-radius: ${tokens.size.x8};
        }
      `}</style>
    </div>
  )
}
