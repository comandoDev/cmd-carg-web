import { useFormContext } from 'react-hook-form'

import { ComboboxBankAccount } from '@/components/ComboboxBankAccount'
import { ComboboxBorrower } from '@/components/ComboboxBorrower'
import { ComboboxBranch } from '@/components/ComboboxBranch'
import { ComboboxDriver } from '@/components/ComboboxDriver'
import { ComboboxSupplier } from '@/components/ComboboxSupplier'
import * as Form from '@/components/Form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { registerSelect } from '@/utils/register'

import { TransactionFormFieldsType } from './form-schema'

export function TransactionFormFields() {
  const {
    formState: { errors },
    register,
    watch,
  } = useFormContext<TransactionFormFieldsType>()

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <Form.Field label="Motorista" error={errors.driverId?.message}>
          <ComboboxDriver />
        </Form.Field>

        <Form.Field label="Tomador" error={errors.borrowerId?.message}>
          <ComboboxBorrower />
        </Form.Field>

        <Form.Field label="Filial" error={errors.branchId?.message}>
          <ComboboxBranch />
        </Form.Field>

        <Form.Field
          label="Tipo de pagamento"
          error={errors.paymentType?.message}
        >
          <Select
            {...registerSelect(register('paymentType'))}
            value={watch('paymentType')}
          >
            <SelectTrigger className="h-10">
              <SelectValue placeholder="Selecione um tipo" />
            </SelectTrigger>
            <SelectContent>
              {['Reembolso', 'Balsa', 'Despagamento'].map((paymentType) => {
                return (
                  <SelectItem key={paymentType} value={paymentType}>
                    {paymentType}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </Form.Field>

        <Form.Field label="Fornecedor" error={errors.branchId?.message}>
          <ComboboxSupplier />
        </Form.Field>

        <Form.Field label="Conta bancária">
          <ComboboxBankAccount />
        </Form.Field>

        <Form.Field label="Tipo de carga" error={errors.cargoType?.message}>
          <Select
            {...registerSelect(register('cargoType'))}
            value={watch('cargoType')}
          >
            <SelectTrigger className="h-10">
              <SelectValue placeholder="Selecione um tipo" />
            </SelectTrigger>
            <SelectContent>
              {['Volume', 'Peso'].map((cargoType) => {
                return (
                  <SelectItem key={cargoType} value={cargoType}>
                    {cargoType}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </Form.Field>

        <Form.Input
          label="Peso"
          mask="onlyNumbers"
          error={errors.weight?.message}
          {...register('weight')}
        />

        <Form.Input
          label="Valor"
          mask="currency"
          maxLength={12}
          error={errors.value?.message}
          {...register('value')}
        />
      </div>
    </>
  )
}
