import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { completeNameSchema, cpfCnpjSchema } from '@/utils/schema/'

export const transactionFormFieldsSchema = z.object({
  id: z.string().optional(),
  document: cpfCnpjSchema,
  name: completeNameSchema,
})

export const transactionFormResolver = zodResolver(transactionFormFieldsSchema)

export type TransactionFormFieldsType = z.infer<
  typeof transactionFormFieldsSchema
>
