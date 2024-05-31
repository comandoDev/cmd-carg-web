import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import * as Form from '@/components/Form'
import { FormProps } from '@/components/Form/type'
import { Button } from '@/components/ui/button'
import { formatter } from '@/utils/formatter'

import { SupplierFormFields } from './Fields'
import { SupplierFormFieldsType, supplierFormResolver } from './form-schema'

interface CreateSupplierFormProps extends FormProps {}

export function CreateSupplierForm({ closeModal }: CreateSupplierFormProps) {
  const formMethods = useForm<SupplierFormFieldsType>({
    resolver: supplierFormResolver,
    defaultValues: {
      value: formatter.currency('0'),
      bankAccounts: [
        {
          account: '',
          agency: '',
          bank: '',
          holder: {
            document: '',
            name: '',
          },
          accountType: '',
        },
      ],
    },
  })

  const {
    reset,
    formState: { isSubmitting },
  } = formMethods

  const finishForm = () => {
    closeModal && closeModal()
    reset()
  }

  const onSubmitCreateDepartment = async (data: SupplierFormFieldsType) => {
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
      <SupplierFormFields />

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
