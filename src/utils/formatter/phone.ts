import { formatOnlyNumbers } from './onlyNumbers'

export const formatPhone = (value: string) => {
  const cleanedValue = formatOnlyNumbers(value)

  // Formato para números de telefone fixo (XX) XXXX-XXXX
  if (cleanedValue.length <= 10) {
    return cleanedValue
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
  }

  // Formato para números de celular (XX) XXXXX-XXXX
  return cleanedValue
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
}
