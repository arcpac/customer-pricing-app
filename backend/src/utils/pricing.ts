export function computeAdjustedPrice(
  basePrice: number,
  type: "fixed" | "percentage",
  direction: "increase" | "decrease",
  value: number
): number {
  const delta = type === "fixed" ? value : basePrice * (value / 100)
  const adjusted = direction === "increase" ? basePrice + delta : basePrice - delta
  return Math.max(0, Math.round(adjusted * 100) / 100)
}
