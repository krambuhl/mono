import { useMemo } from 'react'
import type { Formula } from 'types/formulas'

import { Sketch } from 'components/Sketch'

import { useLimits } from './useLimits'
import css from './FormulaSketch.module.css'

const round = (x: number) => Math.ceil(x * 1000) / 1000
const interpolate = (a: number, b: number, t: number) => t / (b - a)

export function FormulaSketch(config: Formula) {
  const fn = config.formulaFn

  const limits = useLimits(fn, { start: 0, end: Math.PI * 2 })
  const min = useMemo(() => round(limits.min), [limits.min])
  const max = useMemo(() => round(limits.max ?? Infinity), [limits.max])
  const size = 512

  return (
    <div className={css.root}>
      <div className={css.formula}>
        <code>{config.formula}</code>
      </div>
      <div className={css.graph}>
        <Sketch
          setup={(p, store) => {
            p.createCanvas(size, size, p.WEBGL)
            p.background(20, 20, 20)
            store.history = []
          }}
          draw={(p, store) => {
            const repeatInput = (p.millis() / 1400) % (Math.PI * 2)
            const out = fn(repeatInput)
            const pos = interpolate(
              Math.max(min, config.min ?? -Infinity),
              Math.min(max, config.max ?? Infinity),
              out
            )

            const x =
              (repeatInput / (Math.PI * 2)) * (size * 0.75) - (size * 0.75) / 2
            const y = pos * (size / 2)

            store.history.push([x, y])
            if (store.history.length > 420) {
              store.history.splice(0, 1)
            }

            p.clear(20 / 255, 20 / 255, 20 / 255, 1)
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
      <div className={css.range}>
        <span>
          min:{' '}
          <strong>{Math.abs(min) > 100000 ? min.toExponential(2) : min}</strong>
        </span>
        <span>
          max:{' '}
          <strong>{Math.abs(max) > 100000 ? max.toExponential(2) : max}</strong>
        </span>
      </div>
    </div>
  )
}
