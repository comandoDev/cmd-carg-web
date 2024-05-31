import { formatCpfCnpj as cpfCnpj } from './cpfCnpj'
import { formatCurrency as currency } from './currency'
import { formatOnlyNumbers as onlyNumbers } from './onlyNumbers'
import { formatPhone as phone } from './phone'
import {
  formatCapitalize as capitalize,
  formatLowercase as lowercase,
  formatUppercase as uppercase,
} from './string'

export const formatter = {
  onlyNumbers,
  cpfCnpj,
  uppercase,
  lowercase,
  capitalize,
  currency,
  phone,
}
