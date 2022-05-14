import Head from 'next/head'
import type { P5Color } from 'types/p5'

import { Grid } from 'components/Grid'
import { Sketch } from 'components/Sketch'
import { HtmlHead } from 'components/HtmlHead'
import { Text } from 'components/Text'
import { Stack } from 'components/Stack'

const baseBg: P5Color = [20 / 255, 20 / 255, 20 / 255, 255]
const size = 512

export const meta = {
  title: 'Donuts are for Winners',
  date: '2022-05-11T00:00:00',
}

export default function Output() {
  return (
    <Stack>
      <HtmlHead title={meta.title} />

      <Text as="h1" type="heading" size="lg">
        {meta.title}
      </Text>

      <Grid size={280}>
        <div
          style={{
            maxWidth: 720,
            borderRadius: `var(--size-sm)`,
            overflow: 'hidden',
          }}
        >
          <Sketch
            setup={(p, store) => {
              p.createCanvas(size, size, p.WEBGL)
              p.colorMode(p.HSL)

              store.history = Array(1280 * 2)
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
                const time = start / 500
                const input =
                  (start - offset) /
                  p.lerp(30, 45, p.norm(Math.sin(time), -1, 1))

                const x =
                  Math.sin(input) * (Math.cos(time) * (size / 4)) +
                  Math.sin(i) * (size / 6)
                const y =
                  Math.cos(input) * (Math.sin(time) * (size / 4)) +
                  Math.cos(i) * (size / 6)

                p.fill(
                  p.color(
                    p.lerp(
                      90,
                      300,
                      p.norm(
                        Math.sqrt(
                          Math.pow(x + (Math.sin(y) * size) / 16, 2) +
                            Math.pow(y + (Math.sin(x) * size) / 16, 2)
                        ),
                        0,
                        size / 3
                      )
                    ),
                    90,
                    60
                  )
                )
                p.circle(x, y, p.lerp(2, 5, Math.sin(pos) * Math.cos(pos)))
              }
            }}
          />
        </div>
      </Grid>
    </Stack>
  )
}
