import { useFormContext } from 'react-hook-form'

import { ComboboxDemo } from '@/components/Combobox'
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
          <ComboboxDemo />
        </Form.Field>
        <Form.Input
          label="Motorista"
          error={errors.driverId?.message}
          {...register('driverId')}
        />
        <Form.Input
          label="Tomador"
          error={errors.borrowerId?.message}
          {...register('borrowerId')}
        />
        <Form.Input
          label="Filial"
          error={errors.branchId?.message}
          {...register('branchId')}
        />

        <Form.Field
          label="Tipo de fornecedor"
          error={errors.supplierType?.message}
        >
          <Select
            {...registerSelect(register('supplierType'))}
            value={watch('supplierType')}
          >
            <SelectTrigger className="h-10">
              <SelectValue placeholder="Selecione um tipo" />
            </SelectTrigger>
            <SelectContent>
              {['Cliente', 'Chapa', 'Motorista Frota', 'Agregado'].map(
                (supplierType) => {
                  return (
                    <SelectItem key={supplierType} value={supplierType}>
                      {supplierType}
                    </SelectItem>
                  )
                },
              )}
            </SelectContent>
          </Select>
        </Form.Field>

        <Form.Input
          label="Tomador"
          error={errors.supplierId?.message}
          {...register('supplierId')}
        />

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
