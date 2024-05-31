import { z } from 'zod'

import { formatter } from '../formatter'

export const phoneSchema = z
  .string({
    required_error: 'Número de celular é obrigatório.',
  })
  .refine((number) => {
    const stringNumber = formatter.onlyNumbers(number)
    return stringNumber.length === 10 || stringNumber.length === 11
  }, 'Número de celular deve conter 10 ou 11 dígitos.')
  .refine((number) => {
    const numberDigits = formatter.onlyNumbers(number, 'number')
    return !!numberDigits
  }, 'Número de celular deve conter apenas números.')
