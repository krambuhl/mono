import Head from 'next/head'

import { Grid } from 'components/Grid'
import { Sketch } from 'components/Sketch'

type Color = [number, number, number, number]

const baseBg: Color = [20 / 255, 20 / 255, 20 / 255, 255]
const size = 512

export const meta = {
  title: 'Big Donut',
  date: '2022-04-16',
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

                const x = Math.sin(input) * outside +
                    Math.sin(offset) * inside
                const y = Math.cos(input) * outside +
                    Math.cos(offset) * inside

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
                  p.lerp(2, 12, (
                    Math.sin(
                      ((x * y) / 1000) * 
                      Math.cos(start / 100 % (Math.PI * 2))
                    ) + 1) / 2
                  )
                )
              }
            }}
          />
        </div>
      </Grid>
    </>
  )
}
