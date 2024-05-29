import { useFormContext } from 'react-hook-form'

import * as Form from '@/components/Form'
import { FormStepProps } from '@/components/Form/type'
import { Button } from '@/components/ui/button'

import { SupplierFormFieldsType } from '../formSchema'

export function SupplierBankAccountStep({ value }: FormStepProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<SupplierFormFieldsType>()

  return (
    <Form.StepContent value={value}>
      <div className="grid grid-cols-2 gap-4">
        <Form.Input label="Documento Titular (CNPJ/CPF)" mask="cpfCnpj" />
        <Form.Input label="Nome Titular" mask="capitalize" />
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Form.Input label="Banco" />
        <Form.Input label="Conta" />
        <Form.Input label="Agência" />
        <Form.Input label="Tipo da conta" />
      </div>

      <Form.Input label="Observação" />

      <Button
        className="w-full border-primary text-primary hover:bg-primary/5 hover:text-primary"
        variant="outline"
      >
        Nova conta bancária
      </Button>
    </Form.StepContent>
  )
}
