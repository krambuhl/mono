import type { P5Color } from 'types/p5'
import { Sketch } from 'components/Sketch'
import { PageHeader } from 'ui/components/PageHeader'
import { Stack } from 'ui/components/Stack'
import { HtmlTitle } from 'ui/components/HtmlTitle'
import { Area } from 'ui/components/Area'
import { tokens } from 'ui/tokens'

const baseBg: P5Color = [0 / 255, 0 / 255, 0 / 255, 255]
const size = 512

export const meta = {
  title: 'Big Donut',
  date: '2022-04-16',
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
              p.createCanvas(size, size, p.WEBGL)
              p.colorMode(p.HSL)

              store.history = Array(377)
                .fill(null)
                .map((_, i) => i)
            }}
            draw={(p, store) => {
              // reset
              p.clear(...baseBg)
              p.noStroke()

              const start = p.frameCount
              const length = store.history.length

              for (let i = 0; i < length; i++) {
                const pos = i / length
                const offset = store.history[i]
                const input = (start - offset) / 60

                const outside = size / p.lerp(6, 6, Math.sin(start / 100))
                const inside = size / p.lerp(6, 8, Math.cos(start / 90))

                const x = Math.sin(input) * outside + Math.sin(offset) * inside
                const y = Math.cos(input) * outside + Math.cos(offset) * inside

                p.fill(
                  p.lerpColor(
                    p.lerpColor(
                      p.color(0, 100, 60),
                      p.color(80, 100, 60),
                      p.norm(Math.sin(input * inside), -1, 1)
                    ),
                    p.lerpColor(
                      p.color(110, 100, 60),
                      p.color(270, 100, 60),
                      p.norm(Math.cos(input * inside), -1, 1)
                    ),
                    p.norm(Math.sin((x * y) / 1000), -1, 1)
                  )
                )

                p.circle(
                  x,
                  y,
                  p.lerp(
                    2,
                    12,
                    (Math.sin(
                      ((x * y) / 1000) * Math.cos((start / 100) % (Math.PI * 2))
                    ) +
                      1) /
                      2
                  )
                )
              }
            }}
          />
        </Area>
      </Stack>
    </>
  )
}
