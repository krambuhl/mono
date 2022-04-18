import Head from 'next/head'

import { Grid } from 'components/Grid'
import { Sketch } from 'components/Sketch'

type Color = [number, number, number, number]

const baseBg: Color = [20 / 255, 20 / 255, 20 / 255, 255]
const size = 512

export const meta = {
  title: 'Big Diamond',
  date: '2022-04-16T00:00:00',
}

export default function Output() {
  return (
    <>
      <Head>
        <title>kram.codes — {meta.title}</title>
      </Head>

      <h1>{meta.title}</h1>
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

              store.history = Array(377 * 4)
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
                const input = (start - offset) / p.lerp(44.9, 45.1, p.norm(Math.sin(start / 1000), -1, 1))

                if (input > -20 || i % 4 > 3) {
                  p.fill(
                    p.lerpColor(
                      p.color(0, 100, 60),
                      p.color(40, 100, 60),
                      p.norm(Math.sin(input), -1, 1)
                    )
                  )
                } else {
                  p.fill(
                    p.lerpColor(
                      p.color(200, 100, 60),
                      p.color(270, 100, 60),
                      p.norm(Math.cos(input), -1, 1)
                    )
                  )
                }

                const y =
                  Math.cos(input) * (size / 8) *
                    p.lerp(1, 3, Math.cos(input * 9))

                const x = 
                  Math.sin(input) * (size / 2) *
                    p.lerp(0, -1, Math.sin(pos))
                      // p.lerp(0, size / 4, Math.sin(offset * pos))

                p.circle(
                  x, y,
                  p.lerp(4, 32, Math.sin(pos) * Math.cos(pos))
                )
              }
            }}
          />
        </div>
      </Grid>
    </>
  )
}
