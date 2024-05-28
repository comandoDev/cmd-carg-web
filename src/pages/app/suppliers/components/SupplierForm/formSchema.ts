import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { completeNameSchema, cpfCnpjSchema } from '@/utils/schema/'

export const supplierFormFieldsSchema = z.object({
  id: z.string().optional(),
  document: cpfCnpjSchema,
  name: completeNameSchema,
  value: z.string().transform((value) =>
    value
      .replace(/[^0-9,.-]+/g, '')
      .replace(/\./g, '')
      .replace(',', '.'),
  ),
})

export const supplierFormResolver = zodResolver(supplierFormFieldsSchema)

export type SupplierFormFieldsType = z.infer<typeof supplierFormFieldsSchema>
