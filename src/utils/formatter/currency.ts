export const formatCurrency = (value: string) => {
  const onlyDigits = value
    .split('')
    .filter((s) => /\d/.test(s))
    .join('')
    .padStart(3, '0')

  const digitsFloat = onlyDigits.slice(0, -2) + '.' + onlyDigits.slice(-2)

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(digitsFloat))
}
