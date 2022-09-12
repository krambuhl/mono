import type { AutoGridProps, GridProps } from './types'

export function Grid({ gap, columns, rows, children, ...props }: GridProps) {
  return (
    <div {...props}>
      {children}

      <style jsx>{`
        div {
          display: grid;
          width: 100%;
          ${gap ? `gap: ${gap}` : ''};
          ${columns ? `grid-template-columns: ${columns}` : ''};
          ${rows ? `grid-template-rows: ${rows}` : ''};
        }
      `}</style>
    </div>
  )
}

export function AutoGrid({ gap, width, ...props }: AutoGridProps) {
  return (
    <Grid
      gap={gap}
      columns={`repeat(auto-fit, minmax(min(${width}, 95vw), 1fr));`}
      {...props}
    />
  )
}
