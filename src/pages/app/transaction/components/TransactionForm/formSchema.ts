import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const transactionFormFieldsSchema = z.object({
  id: z.string().optional(),
  document: z
    .string({
      required_error: 'CPF/CNPJ é obrigatório.',
    })
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, '')
      return replacedDoc.length >= 11
    }, 'CPF/CNPJ deve conter no mínimo 11 caracteres.')
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, '')
      return replacedDoc.length <= 14
    }, 'CPF/CNPJ deve conter no máximo 14 caracteres.')
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, '')
      return !!Number(replacedDoc)
    }, 'CPF/CNPJ deve conter apenas números.'),
  name: z.string().min(1, 'Informe um nome'),
})

export const transactionFormResolver = zodResolver(transactionFormFieldsSchema)

export type TransactionFormFieldsType = z.infer<
  typeof transactionFormFieldsSchema
>
