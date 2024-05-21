'use client'

import * as Input from '@/components/Input'
import { Button } from '@/components/Button'
import { FormEvent, useRef, useState } from 'react'
import { X } from 'lucide-react'
import * as Select from './Select'
import { api } from '@/lib/axios'
import { ITonHandlePayload, ITonType } from '@/@types/movimentation'
import { toast } from 'react-toastify'
import { useMovimentation } from '@/contexts/MovimentationContext'
import { storage } from '@/utils/localStorage'

export function MovimentationForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const { getMovimentations } = useMovimentation()
  const [isLoading, setIsLoading] = useState(false)

  const [nf, setNF] = useState('')
  const [receipt, setReceipt] = useState([] as string[])
  const [licensePlate, setLicensePlate] = useState('')
  const [type, setType] = useState<ITonType | ''>('')

  // Data máxima daqui 10 anos
  const today = new Date()
  const maxDate = new Date(
    today.getFullYear() + 10,
    today.getMonth(),
    today.getDate(),
  )
  const maxDateISO = maxDate.toISOString().split('T')[0]

  const handleNewMovimentation = async (e: FormEvent<HTMLFormElement>) => {
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
      weight: Number(weight.value),
      date: new Date(date.value),
      truckDay: Number(truckDay.value),
      shippingCompany: shippingCompany.value,
      truckDriver: truckDriver.value,
      truckPlate: truckPlate.value,
      receipts: receipt,
      type: type === '' ? undefined : type,
    }

    await api
      .post('auth/ton-handle', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success('Movimentação cadastrada')
        formRef.current?.reset()
        setReceipt([])
        setType('')
        setLicensePlate('')
        getMovimentations()
      })
      .catch((err) => {
        const errorMessage = err.response.data.message

        if (receipt.length === 0) {
          return toast.error('Informe uma NF')
        }

        if (!type) {
          return toast.error('Informe um Tipo de Serviço')
        }
        toast.error(errorMessage)
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleNewMovimentation}
      className="grid grid-cols-5 grid-rows-2 gap-2 w-full pb-6"
    >
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
          required
        />
      </Input.Root>
      <Input.Root label="Data">
        <Input.Control
          id="date"
          max={maxDateISO}
          placeholder="Data"
          name="date"
          type="date"
          required
        />
      </Input.Root>
      <Input.Root label="Transportadora">
        <Input.Control
          id="shippingCompany"
          placeholder="Transportadora"
          name="shippingCompany"
          required
        />
      </Input.Root>
      <Input.Root label="Cliente">
        <Input.Control
          id="client"
          placeholder="Cliente"
          name="client"
          required
        />
      </Input.Root>
      <Input.Root label="Motorista">
        <Input.Control
          id="truckDriver"
          name="truckDriver"
          placeholder="Motorista"
          required
        />
      </Input.Root>
      <Input.Root label="Placa">
        <Input.Control
          id="truckPlate"
          name="truckPlate"
          placeholder="Placa"
          minLength={7}
          maxLength={7}
          required
          value={licensePlate}
          onChangeText={(value) => setLicensePlate(value.toLocaleUpperCase())}
        />
      </Input.Root>
      <Input.Root label="Caminhões por dia">
        <Input.Control
          id="truckDay"
          placeholder="Caminhões por Dia"
          name="truckDay"
          type="number"
          required
        />
      </Input.Root>
      <Select.Root
        value={type}
        onValueChange={(value: ITonType) => setType(value)}
      >
        <Select.Trigger placeholder="Tipo de Serviço" className=" h-14" />
        <Select.Content>
          <Select.Item text="Carga" value="Carga" />
          <Select.Item text="Descarga" value="Descarga" />
        </Select.Content>
      </Select.Root>
      <Button type="submit" isLoading={isLoading} className="w-full h-full">
        Enviar
      </Button>
    </form>
  )
}
