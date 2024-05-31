import { useFormContext } from 'react-hook-form'

import * as Form from '@/components/Form'

import { SupplierFormFieldsType } from './form-schema'
import { SupplierBankAccountStep } from './Steps/BankAccountStep'
import { SupplierGeneralStep } from './Steps/GeneralStep'

export function SupplierFormFields() {
  const {
    formState: { errors },
  } = useFormContext<SupplierFormFieldsType>()

  const generalStepErrorsCount = [
    errors.document?.message,
    errors.name?.message,
    errors.type?.message,
    errors.serviceType?.message,
    errors.value?.message,
    errors.city?.message,
    errors.uf?.message,
    errors.phone?.message,
  ].filter(Boolean).length

  const bankAccountStepErrorsCount = Array.isArray(errors.bankAccounts)
    ? [
        ...errors.bankAccounts.filter((b) => b?.holder?.document?.message),
        ...errors.bankAccounts.filter((b) => b?.holder?.name?.message),
        ...errors.bankAccounts.filter((b) => b?.bank?.message),
        ...errors.bankAccounts.filter((b) => b?.account?.message),
        ...errors.bankAccounts.filter((b) => b?.agency?.message),
        ...errors.bankAccounts.filter((b) => b?.accountType?.message),
        ...errors.bankAccounts.filter((b) => b?.observation?.message),
      ].length
    : 0

  return (
    <Form.MultiStepRoot defaultValue="general" className="w-full">
      <Form.TabsStepList>
        <Form.TabStepTrigger
          value="general"
          label="Geral"
          stepErrorsCount={generalStepErrorsCount}
        />
        <Form.TabStepTrigger
          value="bank-account"
          label="Contas Bancárias"
          stepErrorsCount={bankAccountStepErrorsCount}
        />
      </Form.TabsStepList>

      <SupplierGeneralStep value="general" />
      <SupplierBankAccountStep value="bank-account" />
    </Form.MultiStepRoot>
  )
}
