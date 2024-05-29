import { useFormContext } from 'react-hook-form'

import * as Form from '@/components/Form'

import { SupplierFormFieldsType } from './formSchema'
import { SupplierBankAccountStep } from './Steps/BankAccountStep'
import { SupplierGeneralStep } from './Steps/GeneralStep'

export function SupplierFormFields() {
  const {
    formState: { errors },
  } = useFormContext<SupplierFormFieldsType>()

  return (
    <Form.MultiStepRoot defaultValue="general" className="w-full">
      <Form.TabsStepList>
        <Form.TabStepTrigger
          value="general"
          label="Geral"
          errors={errors}
          fields={[
            'document',
            'name',
            'type',
            'serviceType',
            'value',
            'city',
            'uf',
            'phone',
          ]}
        />
        <Form.TabStepTrigger
          value="bank-account"
          label="Contas Bancárias"
          errors={errors}
          fields={[]}
        />
      </Form.TabsStepList>

      <SupplierGeneralStep value="general" />
      <SupplierBankAccountStep value="bank-account" />
    </Form.MultiStepRoot>
  )
}
