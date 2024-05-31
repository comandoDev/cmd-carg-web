import { X } from 'lucide-react'
import { useFieldArray, useFormContext } from 'react-hook-form'

import * as Form from '@/components/Form'
import { FormStepProps } from '@/components/Form/type'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

import { SupplierFormFieldsType } from '../form-schema'

export function SupplierBankAccountStep({ value }: FormStepProps) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<SupplierFormFieldsType>()

  const { fields, append, remove } = useFieldArray({
    name: 'bankAccounts',
    control,
  })

  const addNewTech = () => {
    append({
      account: '',
      agency: '',
      bank: '',
      holder: {
        document: '',
        name: '',
      },
      accountType: '',
    })
  }

  return (
    <Form.StepContent value={value}>
      {fields.map((bankAccount, index) => {
        const bankAccountErrors = errors.bankAccounts![index]

        return (
          <div key={bankAccount.id} className="space-y-6">
            <div>
              <Label className="text-xl">Conta Bancaria {index + 1}</Label>
              <X className="h-4 w-4" onClick={() => remove(index)} />
            </div>
            <Separator className="mb-6 mt-4" />
            <div className="grid grid-cols-2 gap-4">
              <Form.Input
                label="Documento Titular (CPF/CNPJ)"
                mask="cpfCnpj"
                error={bankAccountErrors?.holder?.document?.message}
                {...register(`bankAccounts.${index}.holder.document`)}
              />
              <Form.Input
                label="Nome Titular"
                mask="capitalize"
                error={bankAccountErrors?.holder?.name?.message}
                {...register(`bankAccounts.${index}.holder.name`)}
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              <Form.Input
                label="Banco"
                error={bankAccountErrors?.bank?.message}
                {...register(`bankAccounts.${index}.bank`)}
              />
              <Form.Input
                label="Conta"
                error={bankAccountErrors?.account?.message}
                {...register(`bankAccounts.${index}.account`)}
              />
              <Form.Input
                label="Agência"
                error={bankAccountErrors?.agency?.message}
                {...register(`bankAccounts.${index}.agency`)}
              />
              <Form.Input
                label="Tipo da conta"
                error={bankAccountErrors?.accountType?.message}
                {...register(`bankAccounts.${index}.accountType`)}
              />
            </div>

            <Form.Input
              label="Observação (Opcional)"
              error={bankAccountErrors?.observation?.message}
              {...register(`bankAccounts.${index}.observation`)}
            />
          </div>
        )
      })}

      <Button
        className="w-full border-primary text-primary hover:bg-primary/5 hover:text-primary"
        variant="outline"
        onClick={() => {
          addNewTech()
        }}
      >
        Nova conta bancária
      </Button>
    </Form.StepContent>
  )
}
