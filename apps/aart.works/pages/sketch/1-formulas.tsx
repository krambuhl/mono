import { useMemo } from 'react'
import type { FormulaSketchProps } from 'components/FormulaSketch/types'
import { FormulaSketch } from 'components/FormulaSketch'
import { HtmlHead } from 'components/HtmlHead'
import { Grid } from 'ui/components/Grid'
import { Text } from 'ui/components/Text'
import { Stack } from 'ui/components/Stack'

export const meta = {
  title: 'Formulas',
  date: '2022-04-03',
}

export default function FormulaList() {
  const formulaList = useMemo(() => getFormulas(), [])

  return (
    <Stack>
      <HtmlHead title={meta.title} />

      <Text as="h1" type="heading" size="lg">
        {meta.title}
      </Text>

      <Grid size={280}>
        {formulaList.map((config, i) => (
          <FormulaSketch key={i} {...config} />
        ))}
      </Grid>
    </Stack>
  )
}

function getFormulas(): FormulaSketchProps[] {
  return [
    {
      formulaName: 'f(x) = sin(x)',
      formula: (x: number) => Math.sin(x),
    },
    {
      formulaName: 'f(x) = cos(x)',
      formula: (x: number) => Math.cos(x),
    },
    {
      formulaName: 'f(x) = tan(x)',
      formula: (x: number) => Math.tan(x),
      min: -4,
      max: 4,
    },
    {
      formulaName: 'f(x) = log(x)',
      formula: (x: number) => Math.log(x),
      min: 0,
    },
  ]
}
