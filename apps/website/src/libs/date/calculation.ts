import { DAY_IN_MS } from './constants'

export function calculateDiffInYears(from: Date, to: Date): number {
  const diff = to.getTime() - from.getTime()
  const daysDiff = diff / DAY_IN_MS
  const monthsDiff = daysDiff / 31
  const yearsDiff = monthsDiff / 12

  return Math.floor(yearsDiff)
}
