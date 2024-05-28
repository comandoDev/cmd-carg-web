import { formatCpfCnpj as cpfCnpj } from './cpfCnpj'
import { formatOnlyNumbers as onlyNumbers } from './onlyNumbers'
import {
  formatCapitalize as capitalize,
  formatLowercase as lowercase,
  formatUppercase as uppercase,
} from './string'

export const format = {
  onlyNumbers,
  cpfCnpj,
  uppercase,
  lowercase,
  capitalize,
}
