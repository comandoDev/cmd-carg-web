import { forwardRef } from 'react'

import { Input, InputProps } from '../ui/input'
import { FormField } from './Field'

interface FormInputProps extends InputProps {
  label?: string
  error?: string
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <FormField label={label} error={error} htmlFor={props.name}>
        <Input id={props.name} ref={ref} {...props} />
      </FormField>
    )
  },
)
FormInput.displayName = 'FormInput'
