import { ComponentProps } from 'react'

import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface FormFieldProps extends ComponentProps<'div'> {
  label?: string
  error?: string
  htmlFor?: string
}

export function FormField({
  label,
  error,
  htmlFor,
  children,
  className,
  ...props
}: FormFieldProps) {
  return (
    <div className={cn(['flex flex-col space-y-2', className])} {...props}>
      {label && (
        <Label htmlFor={htmlFor} className="font-medium">
          {label}
        </Label>
      )}
      {children}
      <span className="h-2 text-xs text-red-600">{error}</span>
    </div>
  )
}
