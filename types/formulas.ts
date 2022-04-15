export type FormulaFn = (x: number) => number

export interface Formula {
  formula: string
  formulaFn: FormulaFn
  min?: number
  max?: number
}
