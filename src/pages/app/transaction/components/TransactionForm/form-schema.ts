import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const transactionFormFieldsSchema = z.object({
  id: z.string().optional(),
  driverId: z.string().min(1, 'Informe um motorista'),
  borrowerId: z.string().min(1, 'Informe um tomador'),
  branchId: z.string().min(1, 'Informe uma filial'),
  supplierType: z.string().min(1, 'Informe um tipo de prestador'),
  supplierId: z.string().min(1, 'Informe um fornecedor'),
  cargoType: z.string().min(1, 'Informe um tipo de carga'),
  paymentType: z.string().min(1, 'Informe um tipo de pagamento'),
  weight: z.coerce.number().min(1, 'Informe um peso'),
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

  nfList: z
    .array(z.object({ nf: z.string() }))
    .min(1, 'Insira pelo menos uma NF')
    .refine((nfList) => {
      const uniqueNFs = new Set(nfList)

      return uniqueNFs.size === nfList.length
    }, 'Não insira NFs repetidas'),
})

export const transactionFormResolver = zodResolver(transactionFormFieldsSchema)

export type TransactionFormFieldsType = z.infer<
  typeof transactionFormFieldsSchema
>
