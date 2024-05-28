export function formatOnlyNumbers(value: string, type: 'number'): number
export function formatOnlyNumbers(value: string, type?: 'string'): string
export function formatOnlyNumbers(
  value: string,
  type: 'number' | 'string' = 'string',
): string | number {
  const cleanedValue = value.replace(/\D/g, '')

  if (type === 'number') {
    return Number(cleanedValue)
  }

  return cleanedValue
}
