import { useFormContext } from 'react-hook-form'

import * as Form from '@/components/Form'

import { DriverFormFieldsType } from './form-schema'

export function DriverFormFields() {
  const {
    formState: { errors },
    register,
  } = useFormContext<DriverFormFieldsType>()

  return (
    <>
      <Form.Input
        label="Documento (CNPJ/CPF)"
        mask="cpfCnpj"
        error={errors.document?.message}
        {...register('document')}
      />
      <Form.Input
        label="Nome"
        mask="capitalize"
        error={errors.name?.message}
        {...register('name')}
      />
      <Form.Input
        label="Telefone"
        mask="phone"
        error={errors.phone?.message}
        {...register('phone')}
      />
    </>
  )
}
