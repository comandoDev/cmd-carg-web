import { FieldErrors, FieldValues } from 'react-hook-form'

import { TabsTrigger } from '../ui/tabs'

interface FormTabStepTriggerProps<TFieldValues extends FieldValues> {
  label: string
  value: string
  errors?: FieldErrors<TFieldValues>
  fields?: (keyof TFieldValues)[]
}

export function FormTabStepTrigger<TFieldValues extends FieldValues>({
  label,
  value,
  fields = [],
  errors,
}: FormTabStepTriggerProps<TFieldValues>) {
  const stepErrors = fields.filter((f) => {
    if (errors && errors[f]?.message) return true

    return false
  })

  const stepErrorsCount = stepErrors.length

  return (
    <TabsTrigger
      value={value}
      className={`group ${stepErrorsCount && 'data-[state=active]:border-b-red-600 data-[state=active]:text-red-600'}`}
    >
      {label}{' '}
      {!!stepErrorsCount && (
        <span className="ml-2 flex h-4 w-4 items-center justify-center rounded-full bg-muted-foreground text-[0.6rem] text-white group-data-[state=active]:bg-red-600">
          {stepErrorsCount}
        </span>
      )}
    </TabsTrigger>
  )
}
