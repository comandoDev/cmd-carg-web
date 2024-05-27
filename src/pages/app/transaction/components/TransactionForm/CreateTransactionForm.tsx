import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import * as Form from '@/components/Form'
import { FormProps } from '@/components/Form/type'
import { Button } from '@/components/ui/button'

import { TransactionFormFields } from './Fields'
import {
  TransactionFormFieldsType,
  transactionFormResolver,
} from './formSchema'

interface CreateTransactionFormProps extends FormProps {}

export function CreateTransactionForm({
  closeModal,
}: CreateTransactionFormProps) {
  const formMethods = useForm<TransactionFormFieldsType>({
    resolver: transactionFormResolver,
  })

  const {
    reset,
    formState: { isSubmitting },
  } = formMethods

  const finishForm = () => {
    closeModal && closeModal()
    reset()
  }

  const onSubmitCreateDepartment = async (data: TransactionFormFieldsType) => {
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
      <TransactionFormFields />

      <Form.ButtonArea>
        <Button variant="outline" onClick={finishForm}>
          Cancelar
        </Button>
        <Button disabled={isSubmitting} type="submit">
          Salvar
        </Button>
      </Form.ButtonArea>
    </Form.Provider>
  )
}
