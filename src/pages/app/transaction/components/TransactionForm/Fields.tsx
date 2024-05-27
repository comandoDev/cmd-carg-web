import { useFormContext } from 'react-hook-form'

import { Input } from '@/components/ui/input'

import { TransactionFormFieldsType } from './formSchema'

export function TransactionFormFields() {
  const {
    register,
    formState: { errors, defaultValues },
  } = useFormContext<TransactionFormFieldsType>()

  return (
    <>
      <Input
        label="Nome"
        placeholder="Nome"
        defaultValue={defaultValues?.name}
        error={errors.name?.message}
        {...register('name')}
      />
    </>
  )
}
