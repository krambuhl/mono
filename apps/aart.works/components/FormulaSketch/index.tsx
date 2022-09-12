import { useMemo } from 'react'
import type { FormulaSketchProps } from './types'
import { Sketch } from 'components/Sketch'

import { useLimits } from './useLimits'

const round = (x: number) => Math.ceil(x * 1000) / 1000
const interpolate = (a: number, b: number, t: number) => t / (b - a)

export function FormulaSketch({
  formulaName,
  formula,
  min,
  max,
}: FormulaSketchProps) {
  const limits = useLimits(formula, { start: 0, end: Math.PI * 2 })
  const limitMin = useMemo(() => round(limits.min ?? -Infinity), [limits.min])
  const limitMax = useMemo(() => round(limits.max ?? Infinity), [limits.max])
  const size = 512

  return (
    <div className="page">
      <div className="formula">
        <code>{formulaName}</code>
      </div>
      <div className="graph">
        <Sketch
          setup={(p, store) => {
            p.createCanvas(size, size, p.WEBGL)
            p.background(20, 20, 20)
            store.history = []
          }}
          draw={(p, store) => {
            const repeatInput = (p.millis() / 1400) % (Math.PI * 2)
            const out = formula(repeatInput)
            const pos = interpolate(
              Math.max(limitMin, min ?? -Infinity),
              Math.min(limitMax, max ?? Infinity),
              out
            )

            const x =
              (repeatInput / (Math.PI * 2)) * (size * 0.75) - (size * 0.75) / 2
            const y = pos * (size / 2)

            store.history.push([x, y])
            if (store.history.length > 340) {
              store.history.splice(0, 1)
            }

            p.clear(0 / 255, 0 / 255, 0 / 255, 1)
            p.noStroke()

            p.fill(255, 255, 255, 20)
            p.rect(-size / 2, 1, 512, 2)

            const length = store.history.length
            for (let i = 0; i < length; i++) {
              const [sx, sy] = store.history[i]
              p.fill(
                255 * ((i * 10) / length),
                255 * (i / length),
                255 * (length / (i / 0.25)),
                255 * ((i / length) * 1.4)
              )
              p.ellipse(
                sx - 1,
                p.lerp(-sy, -sy, i / length) + 1,
                p.lerp(40, 50, (length - i) / length),
                p.lerp(40, 50, (length - i) / length)
              )
            }

            p.fill(
              0 * ((length * 10) / length),
              0 * (length / length),
              0 * (length / (length / 1)),
              255 * ((length / length) * 10)
            )
            p.ellipse(x, -y, 16)
          }}
        />
      </div>
      <div className="range">
        <span>
          min:{' '}
          <strong>
            {Math.abs(limitMin) > 100000 ? limitMin.toExponential(2) : limitMin}
          </strong>
        </span>
        <span>
          max:{' '}
          <strong>
            {Math.abs(limitMax) > 100000 ? limitMax.toExponential(2) : limitMax}
          </strong>
        </span>
      </div>

      <style jsx>{`
        .page {
          border: 2px solid var(--bg-inverted-default);
          border-radius: var(--size-12);
          box-shadow: var(--shadow-mid);
          color: var(--fg-inverted-default);
          display: grid;
          grid-template-rows: auto min-content;
          padding: var(--size-8);
          text-align: center;
        }

        .formula {
          font-weight: bold;
        }

        .graph {
          aspect-ratio: 1;
          margin: 1em 0;
          margin-left: calc(-1 * var(--size-sm));
          overflow: hidden;
          width: calc(100% + var(--size-sm) * 2);
        }

        .range {
          display: flex;
          font-size: 0.875em;
          justify-content: space-between;
          width: 100%;
        }
      `}</style>
    </div>
  )
}
