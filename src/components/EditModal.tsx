import { FormEvent, useRef, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as Input from '@/components/Input'
import { Edit, X } from 'lucide-react'
import { Button } from './Button'
import { toast } from 'react-toastify'
import { ITonHandle, ITonHandlePayload, ITonType } from '@/@types/movimentation'
import * as Select from './Select'
import { api } from '@/lib/axios'
import { useMovimentation } from '@/contexts/MovimentationContext'
import { storage } from '@/utils/localStorage'

interface EditModalProp {
  movimentation: ITonHandle
}

export function EditModal({ movimentation: m }: EditModalProp) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const { getMovimentations } = useMovimentation()

  const [nf, setNF] = useState('')
  const [receipt, setReceipt] = useState(m.receipts)
  const [licensePlate, setLicensePlate] = useState(m.truckPlate)
  const [type, setType] = useState<ITonType | ''>(m.type)

  // Data máxima daqui 10 anos
  const today = new Date()
  const maxDate = new Date(
    today.getFullYear() + 10,
    today.getMonth(),
    today.getDate(),
  )
  const maxDateISO = maxDate.toISOString().split('T')[0]

  const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsLoading(true)
    const token = storage.getToken()

    const formElements = e.currentTarget
      .elements as HTMLFormControlsCollection & {
      weight: HTMLInputElement
      client: HTMLInputElement
      date: HTMLInputElement
      truckDay: HTMLInputElement
      shippingCompany: HTMLInputElement
      truckDriver: HTMLInputElement
      truckPlate: HTMLInputElement
    }

    const {
      weight,
      client,
      date,
      truckDay,
      shippingCompany,
      truckDriver,
      truckPlate,
    } = formElements

    const body: ITonHandlePayload = {
      client: client.value,
      weight: parseFloat(weight.value),
      date: new Date(date.value),
      truckDay: Number(truckDay.value),
      shippingCompany: shippingCompany.value,
      truckDriver: truckDriver.value,
      truckPlate: truckPlate.value,
      receipts: receipt,
      type: type === '' ? undefined : type,
    }

    await api
      .put(`auth/ton-handle/${m.id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        const formattedReceipt = receipt
          .join(', ')
          .replace(/,(?=[^,]*$)/, ' e ')

        toast.success(`Movimentação atualizada (NF - ${formattedReceipt})`)
        formRef.current?.reset()
        setReceipt([])
        setType('')
        setLicensePlate('')
        getMovimentations()
        setOpen(false)
      })
      .catch((err) => {
        toast.error(err.response.data.message)
        console.log(err)
      })
      .finally(() => setIsLoading(false))
  }

  const dataArray = m.date.split('/')
  const date = dataArray[2] + '-' + dataArray[1] + '-' + dataArray[0]

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <div className="group">
        <Dialog.Trigger
          type="button"
          className="hover:bg-orange-300 hover:text-orange-900 rounded-lg p-2 flex items-center text-zinc-500"
        >
          <Edit className="h-4 w-4" />
        </Dialog.Trigger>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
        <Dialog.Content className="absolute p-8 bg-zinc-100 rounded-2xl w-full max-w-[900px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-500 rounded-lg hover:bg-zinc-200 p-1">
            <X size={24} aria-label="Fechar" />
          </Dialog.Close>

          <Dialog.Title className="text-2xl leading-tight text-zinc-900 font-semibold mb-8">
            Editar Movimentação
          </Dialog.Title>
          <form ref={formRef} className="space-y-4" onSubmit={handleEdit}>
            <div className="grid grid-cols-3 grid-rows-3 gap-2 w-full">
              <div className="grid grid-cols-5 gap-1">
                <Input.Root label="Nova NF" className="col-span-2">
                  <Input.Control
                    placeholder="Nova NF"
                    value={nf}
                    onChangeText={(value) => {
                      const sanitizedValue = value.replace(/[^0-9\s]/g, '')
                      const lastWord = sanitizedValue[sanitizedValue.length - 1]

                      if (lastWord === ' ' && sanitizedValue.trim()) {
                        setReceipt([value.trim(), ...receipt])
                        setNF('')
                      } else {
                        setNF(sanitizedValue)
                      }
                    }}
                  />
                </Input.Root>
                <div className="flex col-span-3 gap-[3px] flex-wrap h-14 p-2 pt-0 bg-zinc-200 rounded-lg border border-zinc-300 overflow-auto">
                  <label className="w-full sticky top-0 pt-2 bg-zinc-200 uppercase text-[10px] font-bold text-zinc-700">
                    NF ({receipt.length})
                  </label>
                  {receipt?.map((value, index) => {
                    return (
                      <button
                        key={index}
                        type="button"
                        className="hover:bg-red-400/50 hover:text-red-800 hover:border-red-400/40 border flex text-[10px] h-4 items-center gap-[3px] justify-center bg-violet-300 rounded-full px-1.5 text-violet-800 font-semibold"
                      >
                        {value}
                        <X
                          className="w-2.5 h-2.5"
                          onClick={() => {
                            const formattedValues = [...receipt]
                            formattedValues.splice(index, 1)
                            setReceipt(formattedValues)
                          }}
                        />
                      </button>
                    )
                  })}
                </div>
              </div>
              <Input.Root label="Peso">
                <Input.Control
                  id="weight"
                  placeholder="Peso"
                  type="number"
                  name="weight"
                  step="0.01"
                  defaultValue={m.weight}
                  required
                />
              </Input.Root>
              <Input.Root label="Data">
                <Input.Control
                  id="date"
                  placeholder="Data"
                  name="date"
                  type="date"
                  defaultValue={date}
                  max={maxDateISO}
                  required
                />
              </Input.Root>
              <Input.Root label="Transportadora">
                <Input.Control
                  id="shippingCompany"
                  placeholder="Transportadora"
                  name="shippingCompany"
                  defaultValue={m.shippingCompany}
                  required
                />
              </Input.Root>
              <Input.Root label="Cliente">
                <Input.Control
                  id="client"
                  placeholder="Cliente"
                  name="client"
                  defaultValue={m.client}
                  required
                />
              </Input.Root>
              <Input.Root label="Motorista">
                <Input.Control
                  id="truckDriver"
                  placeholder="Motorista"
                  name="truckDriver"
                  defaultValue={m.truckDriver}
                  required
                />
              </Input.Root>
              <Input.Root label="Placa">
                <Input.Control
                  id="truckPlate"
                  name="truckPlate"
                  placeholder="Placa"
                  value={licensePlate}
                  defaultValue={m.truckPlate}
                  minLength={7}
                  maxLength={7}
                  required
                  onChangeText={(value) =>
                    setLicensePlate(value.toLocaleUpperCase())
                  }
                />
              </Input.Root>
              <Input.Root label="Caminhões por dia">
                <Input.Control
                  id="truckDay"
                  placeholder="Caminhões Dia"
                  name="truckDay"
                  type="number"
                  defaultValue={m.truckDay}
                  required
                />
              </Input.Root>
              <Select.Root
                defaultValue={type}
                value={type}
                onValueChange={(value: ITonType) => setType(value)}
              >
                <Select.Trigger
                  placeholder="Tipo de Serviço"
                  className=" h-14"
                />
                <Select.Content>
                  <Select.Item text="Carga" value="Carga" />
                  <Select.Item text="Descarga" value="Descarga" />
                </Select.Content>
              </Select.Root>
            </div>

            <Button
              type="submit"
              isLoading={isLoading}
              className="w-full h-full p-4"
            >
              Enviar
            </Button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
