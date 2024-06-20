import { X } from 'lucide-react'
import { ChangeEvent } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

import * as Form from '@/components/Form'
import { Label } from '@/components/ui/label'
import { formatter } from '@/utils/formatter'

import { TransactionFormFieldsType } from '../TransactionForm/form-schema'

export function NFListFields() {
  const {
    formState: { errors },
    control,
  } = useFormContext<TransactionFormFieldsType>()

  const { fields, append, remove } = useFieldArray({
    name: 'nfList',
    control,
  })

  const handleNFChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    const nfFormatted = formatter.onlyNumbers(value)

    if (value.endsWith(' ') && nfFormatted) {
      append({ nf: nfFormatted })
      e.target.value = ''
    } else {
      e.target.value = nfFormatted
    }
  }

  return (
    <Form.Field
      label="Adicionar NF"
      className="col-span-3"
      error={errors.nfList?.message}
    >
      <div>
        <Form.Input onChange={handleNFChange} />
        <div className="col-span-3 space-y-2 overflow-auto rounded-lg border border-zinc-300 bg-zinc-200 p-2 pt-0">
          <Label className="text-xs font-medium ">
            NFs Adicionadas ({fields.length})
          </Label>
          <div className="flex flex-wrap gap-[4px] ">
            {fields?.map(({ nf, id }, index) => {
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    const formattedValues = [...['3w21', 'swewer']]
                    formattedValues.splice(index, 1)
                    remove(index)
                  }}
                  className="flex h-6 items-center justify-center gap-[4px] space-x-2 rounded-md border border-violet-400 bg-primary/50 bg-violet-300 px-2 text-xs font-medium text-violet-800 hover:border-red-400/40 hover:bg-red-400/50 hover:text-red-800"
                >
                  {nf}
                  <X className="h-2.5 w-2.5" />
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </Form.Field>
  )
}
