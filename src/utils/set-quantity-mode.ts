export type QuantityModes = 'decrease' | 'increase'

export function setQuantityMode(mode: QuantityModes, quantity: number) {
  if (mode === 'increase') {
    return ++quantity
  }

  if (mode === 'decrease' && quantity > 1) {
    return --quantity
  }

  return quantity
}
