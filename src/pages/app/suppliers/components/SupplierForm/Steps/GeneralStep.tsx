import { useFormContext } from 'react-hook-form'

import * as CityFields from '@/components/CityFields'
import * as Form from '@/components/Form'
import { FormStepProps } from '@/components/Form/type'

import { SupplierFormFieldsType } from '../form-schema'

export function SupplierGeneralStep({ value }: FormStepProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<SupplierFormFieldsType>()

  return (
    <Form.StepContent value={value}>
      <div className="grid grid-cols-2 gap-4">
        <Form.Input
          label="Documento (CNPJ/CPF)"
          mask="cpfCnpj"
          error={errors.document?.message}
          {...register('document')}
        />
        <Form.Input
          label="Nome Fantasia"
          error={errors.name?.message}
          {...register('name')}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Form.Input
          label="Tipo de Prestador"
          error={errors.type?.message}
          {...register('type')}
        />
        <Form.Input
          label="Tipo de Serviço"
          error={errors.serviceType?.message}
          {...register('serviceType')}
        />

        <Form.Input
          label="Valor"
          mask="currency"
          maxLength={12}
          error={errors.value?.message}
          {...register('value')}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <CityFields.Root>
          <CityFields.SelectUF />
          <CityFields.SelectCity />
        </CityFields.Root>
        {/* <Form.Input
          label="Cidade"
          error={errors.city?.message}
          {...register('city')}
        /> */}
        {/* <Form.Input label="UF" error={errors.uf?.message} {...register('uf')} /> */}
        <Form.Input
          label="Celular"
          mask="phone"
          error={errors.phone?.message}
          {...register('phone')}
        />
      </div>
    </Form.StepContent>
  )
}
