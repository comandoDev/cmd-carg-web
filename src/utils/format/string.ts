export function formatUppercase(value: string): string {
  return value.toUpperCase()
}

export function formatLowercase(value: string): string {
  return value.toLowerCase()
}

export function formatCapitalize(value: string): string {
  return value.replace(/\b\w/g, (char) => char.toUpperCase())
}
