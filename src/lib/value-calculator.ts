/** Pure maths for the homepage "What could one more customer mean?" calculator. */
export function profitPerJob(jobValue: number, marginPct: number): number {
  if (!Number.isFinite(jobValue) || !Number.isFinite(marginPct)) return 0;
  if (jobValue <= 0 || marginPct <= 0) return 0;
  return jobValue * (Math.min(marginPct, 100) / 100);
}

/** Whole jobs needed for the profit to cover one month of a plan; null when inputs can't produce an answer. */
export function jobsToCover(planMonthly: number, jobValue: number, marginPct: number): number | null {
  const profit = profitPerJob(jobValue, marginPct);
  if (profit <= 0 || planMonthly <= 0) return null;
  return Math.ceil(planMonthly / profit - 1e-9);
}
