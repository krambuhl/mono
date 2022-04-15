import { useMemo } from 'react'
import type { Formula } from 'types/formulas'

import { FormulaSketch } from 'components/FormulaSketch'
import { Grid } from 'components/Grid'

export default function FormulaList() {
  const formulaList = useMemo(() => getFormulas(), [])

  return (
    <Grid size={280}>
      {formulaList.map((config, i) => (
        <FormulaSketch key={i} {...config} />
      ))}
    </Grid>
  )
}

function getFormulas(): Formula[] {
  return [
    // {
    //   formula: 'f(x) = x',
    //   formulaFn: (x: number) => x,
    // },
    // {
    //   formula: 'f(x) = -x',
    //   formulaFn: (x: number) => -x,
    // },
    {
      formula: 'f(x) = sin(x)',
      formulaFn: (x: number) => Math.sin(x),
    },
    {
      formula: 'f(x) = cos(x)',
      formulaFn: (x: number) => Math.cos(x),
    },
    {
      formula: 'f(x) = tan(x)',
      formulaFn: (x: number) => Math.tan(x),
      min: -4,
      max: 4,
    },
    // {
    //   formula: 'f(x) = sin(x) + cos(x)',
    //   formulaFn: (x: number) => Math.sin(x) + Math.cos(x),
    // },
    // {
    //   formula: 'f(x) = sin(x) - cos(x)',
    //   formulaFn: (x: number) => Math.sin(x) - Math.cos(x),
    // },
    // {
    //   formula: 'f(x) = sin(x) * cos(x)',
    //   formulaFn: (x: number) => Math.sin(x) * Math.cos(x),
    // },
    // {
    //   formula: 'f(x) = sin(x) * tan(x)',
    //   formulaFn: (x: number) => Math.sin(x) * Math.tan(x),
    //   min: -4,
    //   max: 4,
    // },
    // {
    //   formula: 'f(x) = cos(x) * tan(x)',
    //   formulaFn: (x: number) => Math.cos(x) * Math.tan(x),
    //   min: -4,
    //   max: 4,
    // },
    {
      formula: 'f(x) = log(x)',
      formulaFn: (x: number) => Math.log(x),
      min: 0,
      // max: 4,
    },
    // {
    //   formula: 'f(x) = log2(x)',
    //   formulaFn: (x: number) => Math.log2(x),
    //   min: 0,
    //   // max: 4,
    // },
    // {
    //   formula: 'f(x) = log10(x)',
    //   formulaFn: (x: number) => Math.log10(x),
    //   min: 0,
    //   // max: 4,
    // },
    // {
    //   formula: 'f(x) = log1p(x)',
    //   formulaFn: (x: number) => Math.log1p(x),
    // },
  ]
}
