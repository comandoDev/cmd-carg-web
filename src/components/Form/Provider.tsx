import { ReactNode } from 'react'
import {
  FieldErrors,
  FieldValues,
  FormProvider as FormProviderPrimitive,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form'
import { toast } from 'sonner'

interface FormProviderProps<TFieldValues extends FieldValues> {
  formMethods: UseFormReturn<TFieldValues>
  children: ReactNode[] | ReactNode
  onSubmit: SubmitHandler<TFieldValues>
}

export function FormProvider<TFieldValues extends FieldValues>({
  formMethods,
  children,
  onSubmit,
}: FormProviderProps<TFieldValues>) {
  const { handleSubmit } = formMethods

  const onError = (errors: FieldErrors<FieldValues>) => {
    toast.error('Preencha todos os campos corretamente')
    console.log({ errors })
  }

  return (
    <FormProviderPrimitive {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">
        {children}
      </form>
    </FormProviderPrimitive>
  )
}
