import { UseFormRegisterReturn } from 'react-hook-form'

export const registerSelect = (register: UseFormRegisterReturn<string>) => {
  const { name, onChange } = register

  return {
    ...register,
    onValueChange: (value: string) => {
      onChange({ target: { name, value } })
    },
  }
}
