import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { completeNameSchema, cpfCnpjSchema, phoneSchema } from '@/utils/schema/'

export const supplierFormFieldsSchema = z.object({
  id: z.string().optional(),
  document: cpfCnpjSchema,
  name: z.string().min(1, 'Informe um nome'),
  type: z.string().min(1, 'Informe um tipo de prestador'),
  serviceType: z.string().min(1, 'Informe um tipo de serviço'),
  value: z
    .string()
    .transform((value) =>
      value
        .replace(/[^0-9,.-]+/g, '')
        .replace(/\./g, '')
        .replace(',', '.'),
    )
    .refine(
      (value) => {
        const numberValue = parseFloat(value)
        return numberValue > 0
      },
      {
        message: 'Insira o valor',
      },
    ),
  city: z.string().min(1, 'Informe uma cidade'),
  uf: z.string().min(1, 'Informe uma UF'),
  phone: phoneSchema,

  bankAccounts: z
    .array(
      z.object({
        holder: z.object({
          document: cpfCnpjSchema,
          name: completeNameSchema,
        }),
        bank: z.string().min(1, 'Informe um banco'),
        account: z.string().min(1, 'Informe a conta'),
        agency: z.string().min(1, 'Informe uma agência'),
        accountType: z.string().min(1, 'Informe um tipo da conta'),
        observation: z.string().optional(),
      }),
    )
    .min(1, 'Insira pelo menos 1 conta')
    .refine((bankAccounts) => {
      const accounts = bankAccounts.map((b) => `${b.account}-${b.agency}`)
      const uniqueAccount = new Set(accounts)

      return uniqueAccount.size === bankAccounts.length
    }, 'Não insira contas repetidas'),
})

export const supplierFormResolver = zodResolver(supplierFormFieldsSchema)

export type SupplierFormFieldsType = z.infer<typeof supplierFormFieldsSchema>
