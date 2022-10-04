import type { P5Color } from 'types/p5'

import { PageHeader } from 'ui/components/PageHeader'
import { Stack } from 'ui/components/Stack'
import { HtmlTitle } from 'ui/components/HtmlTitle'
import { tokens } from 'ui/tokens'
import { Area } from 'ui/components/Area'

import { Sketch } from 'components/Sketch'
import { rainbow } from 'data/colorMaps'

const baseBg: P5Color = [0 / 255, 0 / 255, 0 / 255, 255]
const canvasSize = 512

// const sides = 41 * 1
// const padding = 32
// const offset = 0

const sides = 29
const padding = 32
const offset = 2

const gutter = -0.5
const size = (canvasSize - padding * 2) / sides

export const meta = {
  title: 'Old School Grid',
  date: '2022-09-29T00:00:00',
}

export default function Output() {
  return (
    <>
      <HtmlTitle title={meta.title} />

      <Stack gap={tokens.size.x24}>
        <PageHeader title={meta.title} date={meta.date} />
        <Area width={tokens.width.x768}>
          <Sketch
            setup={(p, store) => {
              p.createCanvas(canvasSize, canvasSize)
              p.colorMode(p.HSL)

              store.frames = Array(Math.pow(sides, 2))
                .fill(null)
                .map((_, i) => ({
                  x: i % sides,
                  y: Math.floor(i / sides),
                }))
            }}
            draw={(p, store) => {
              // reset
              p.clear(...baseBg)
              p.noStroke()

              const start = p.frameCount
              const length = store.frames.length

              for (let i = 0; i < length; i++) {
                const pos = store.frames[i]
                const time = start * 0.1

                const x = pos.x * size
                const y = pos.y * size

                const color = (x + offset) * (y + offset) + time

                p.fill(p.color(rainbow[Math.floor(color % rainbow.length)]))
                p.rect(x + padding, y + padding, size - gutter, size - gutter)
              }
            }}
          />
        </Area>
      </Stack>
    </>
  )
}
