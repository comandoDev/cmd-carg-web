import { useFormContext } from 'react-hook-form'

import * as Form from '@/components/Form'
import { registerSelect } from '@/utils/register'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { UF_LIST, UFValue } from './city.mock'
import { useCityField } from './Root'
import { CityFormFields } from './type'

export function SelectUF() {
  const { fetchCities } = useCityField()

  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext<CityFormFields>()

  return (
    <Form.Field label="Estado" error={errors.uf?.message}>
      <Select
        {...registerSelect(
          register('uf', {
            onChange(event) {
              const value = event.target.value as UFValue

              fetchCities(value)
              setValue('city', '')
            },
          }),
        )}
        value={watch('uf')}
      >
        <SelectTrigger className="h-10">
          <SelectValue placeholder="Selecione um estado" />
        </SelectTrigger>
        <SelectContent>
          {UF_LIST.map((uf) => {
            return (
              <SelectItem key={uf.value} value={uf.value}>
                {uf.label}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </Form.Field>
  )
}
