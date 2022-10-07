import { PageHeader } from 'ui/components/PageHeader'
import { Stack } from 'ui/components/Stack'
import { HtmlTitle } from 'ui/components/HtmlTitle'
import { tokens } from 'ui/tokens'
import { Area } from 'ui/components/Area'

import { GridSketch } from 'components/GridSketch'
import { rainbow } from 'data/colorMaps'

export const meta = {
  title: 'Grid E',
  date: '2022-10-03T00:00:01',
}

export default function Output() {
  return (
    <>
      <HtmlTitle title={meta.title} />

      <Stack gap={tokens.size.x24}>
        <PageHeader title={meta.title} date={meta.date} />
        <Area width={tokens.width.x768}>
          <GridSketch
            bg={[0 / 255, 0 / 255, 0 / 255, 255]}
            canvasSize={512}
            sides={29}
            padding={32}
            fill={(pos, frame) => {
              const time = frame / 25000

              const x = pos.x + 29 + time
              const y = pos.y + 29

              const colorIndex = x * ((y + 1) * time)
              return rainbow[Math.floor(Math.abs(colorIndex) % rainbow.length)]
            }}
          />
        </Area>
      </Stack>
    </>
  )
}
