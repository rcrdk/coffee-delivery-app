export function priceFormatted(value: number) {
  const format = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })
    .format(value / 100)
    .replace('R$', '')
    .trim()

  return format
}
