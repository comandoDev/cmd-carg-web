import { z } from 'zod'

import { formatter } from '../formatter'

export const cpfCnpjSchema = z
  .string({
    required_error: 'CPF/CNPJ é obrigatório.',
  })
  .refine((doc) => {
    const stringDocNumbers = formatter.onlyNumbers(doc)
    return stringDocNumbers.length >= 11
  }, 'CPF/CNPJ deve conter no mínimo 11 caracteres.')
  .refine((doc) => {
    const stringDocNumbers = formatter.onlyNumbers(doc)
    return stringDocNumbers.length <= 14
  }, 'CPF/CNPJ deve conter no máximo 14 caracteres.')
  .refine((doc) => {
    const docNumbers = formatter.onlyNumbers(doc, 'number')
    return !!docNumbers
  }, 'CPF/CNPJ deve conter apenas números.')
