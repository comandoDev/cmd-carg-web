import { ReactNode } from 'react'

import { Label } from '@/components/ui/label'

interface FormFieldProps {
  label?: string
  error?: string
  htmlFor?: string
  children: ReactNode | ReactNode[]
}

export function FormField({ label, error, htmlFor, children }: FormFieldProps) {
  return (
    <div className="flex flex-col space-y-2">
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
