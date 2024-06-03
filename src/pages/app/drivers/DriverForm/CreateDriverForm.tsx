import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import * as Form from '@/components/Form'
import { FormProps } from '@/components/Form/type'
import { Button } from '@/components/ui/button'

import { DriverFormFields } from './Fields'
import { DriverFormFieldsType, driverFormResolver } from './form-schema'

interface CreateDriverFormProps extends FormProps {}

export function CreateDriverForm({ closeModal }: CreateDriverFormProps) {
  const formMethods = useForm<DriverFormFieldsType>({
    resolver: driverFormResolver,
  })

  const {
    reset,
    formState: { isSubmitting },
  } = formMethods

  const finishForm = () => {
    closeModal && closeModal()
    reset()
  }

  const onSubmitCreateDepartment = async (data: DriverFormFieldsType) => {
    return new Promise<void>(() => {
      setTimeout(() => {
        console.log({ data })

        toast.success('Movimentação criada com sucesso')
        finishForm()
      }, 1000)
    })
  }

  return (
    <Form.Provider
      formMethods={formMethods}
      onSubmit={onSubmitCreateDepartment}
    >
      <DriverFormFields />

      <Form.ButtonArea>
        <Button variant="outline" onClick={finishForm}>
          Cancelar
        </Button>
        <Button type="submit" isLoading={isSubmitting}>
          Salvar
        </Button>
      </Form.ButtonArea>
    </Form.Provider>
  )
}
