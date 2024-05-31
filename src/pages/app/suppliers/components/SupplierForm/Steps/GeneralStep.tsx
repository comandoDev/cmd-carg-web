import { useFormContext } from 'react-hook-form'

import * as CityFields from '@/components/CityFields'
import * as Form from '@/components/Form'
import { FormStepProps } from '@/components/Form/type'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { registerSelect } from '@/utils/register'

import { SupplierFormFieldsType } from '../form-schema'

export function SupplierGeneralStep({ value }: FormStepProps) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<SupplierFormFieldsType>()

  return (
    <CityFields.Root>
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
          <Form.Field label="Tipo de Prestador" error={errors.type?.message}>
            <Select {...registerSelect(register('type'))} value={watch('type')}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Selecione um tipo" />
              </SelectTrigger>
              <SelectContent>
                {['Fornecedor', 'Chapa', 'Motorista'].map((type) => {
                  return (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          </Form.Field>

          <Form.Field
            label="Tipo de serviço"
            error={errors.serviceType?.message}
          >
            <Select
              {...registerSelect(register('serviceType'))}
              value={watch('serviceType')}
            >
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Selecione um tipo" />
              </SelectTrigger>
              <SelectContent>
                {[
                  'Carreta',
                  'Hora',
                  'Palete',
                  'Por Eixo',
                  'Tonelada',
                  'Volume',
                ].map((serviceType) => {
                  return (
                    <SelectItem key={serviceType} value={serviceType}>
                      {serviceType}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          </Form.Field>

          <Form.Input
            label="Valor"
            mask="currency"
            maxLength={12}
            error={errors.value?.message}
            {...register('value')}
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <CityFields.SelectUF />
          <CityFields.SelectCity />

          <Form.Input
            label="Celular"
            mask="phone"
            placeholder="(XX) XXXXX-XXXX"
            error={errors.phone?.message}
            {...register('phone')}
          />
        </div>
      </Form.StepContent>
    </CityFields.Root>
  )
}
