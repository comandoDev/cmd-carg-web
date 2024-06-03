import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { cpfCnpjSchema, phoneSchema } from '@/utils/schema/'

export const driverFormFieldsSchema = z.object({
  id: z.string().optional(),
  document: cpfCnpjSchema,
  name: z.string().min(1, 'Informe um nome'),
  phone: phoneSchema,
})

export const driverFormResolver = zodResolver(driverFormFieldsSchema)

export type DriverFormFieldsType = z.infer<typeof driverFormFieldsSchema>
