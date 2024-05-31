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
import { useCityField } from './Root'
import { CityFormFields } from './type'

export function SelectCity() {
  const { cities } = useCityField()
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<CityFormFields>()

  const city = watch('city')

  return (
    <Form.Field label="Cidade" error={errors.city?.message}>
      <Select {...registerSelect(register('city'))} value={city || ''}>
        <SelectTrigger className="h-10">
          <SelectValue placeholder="Selecione uma cidade" />
        </SelectTrigger>
        <SelectContent>
          {cities.map((city) => {
            return (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </Form.Field>
  )
}
