"use client";

import * as Input from "@/components/Input";
import { Button } from "@/components/Button";
import { FormEvent, useRef, useState } from "react";
import { X } from "lucide-react";
import * as Select from "../Select";
import { api } from "@/lib/axios";
import { ITonHandlePayload, ITonType } from "@/@types/movimentation";
import { toast } from "react-toastify";
import { useMovimentation } from "@/contexts/MovimentationContext";
import { storage } from "@/utils/localStorage";
import { InputNF } from "./InputFN";
import { IMovimentationForm } from "./type";

export function MovimentationForm() {
  const { getMovimentations } = useMovimentation();

  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [nfList, setNfList] = useState([] as string[]);
  const [type, setType] = useState<ITonType | "">("");

  const handleNewMovimentation = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    const token = storage.getToken();

    const {
      weight,
      client,
      value,
      truckDay,
      shippingCompany,
      truckDriver,
      truckPlate,
    } = e.currentTarget.elements as IMovimentationForm;

    const body: ITonHandlePayload = {
      client: client.value,
      weight: Number(weight.value),
      value: Number(value.value),
      truckDay: Number(truckDay.value),
      shippingCompany: shippingCompany.value,
      truckDriver: truckDriver.value,
      truckPlate: truckPlate.value,
      type: type === "" ? undefined : type,
    };

    setIsLoading(false);

    // await api
    //   .post('auth/ton-handle', body, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then(() => {
    //     toast.success('Movimentação cadastrada')
    //     formRef.current?.reset()
    //     setReceipt([])
    //     setType('')
    //     setLicensePlate('')
    //     getMovimentations()
    //   })
    //   .catch((err) => {
    //     const errorMessage = err.response.data.message

    //     if (receipt.length === 0) {
    //       return toast.error('Informe uma NF')
    //     }

    //     if (!type) {
    //       return toast.error('Informe um Tipo de Serviço')
    //     }
    //     toast.error(errorMessage)
    //   })
    //   .finally(() => setIsLoading(false))
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleNewMovimentation}
      className="grid grid-cols-5 grid-rows-2 gap-2 w-full pb-6"
    >
      <InputNF nfList={nfList} setNfList={setNfList} />
      <Input.Root label="Peso">
        <Input.Control
          id="value"
          placeholder="Valor"
          type="number"
          name="value"
          step="0.01"
          required
        />
      </Input.Root>
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
      <Select.Root
        value={type}
        onValueChange={(value: ITonType) => setType(value)}
      >
        <Select.Trigger placeholder="Tipo de Carga" className=" h-14" />
        <Select.Content>
          <Select.Item text="Volume" value="Volume" />
          <Select.Item text="Peso" value="Peso" />
        </Select.Content>
      </Select.Root>
      <Select.Root
        value={type}
        onValueChange={(value: ITonType) => setType(value)}
      >
        <Select.Trigger placeholder="Tipo de Pagamento" className=" h-14" />
        <Select.Content>
          <Select.Item text="Reembolso" value="Reembolso" />
          <Select.Item text="Carga" value="Carga" />
          <Select.Item text="Descarga" value="Descarga" />
        </Select.Content>
      </Select.Root>
      <Select.Root
        value={type}
        onValueChange={(value: ITonType) => setType(value)}
      >
        <Select.Trigger placeholder="Tipo de Contrato" className=" h-14" />
        <Select.Content>
          <Select.Item text="Agregado" value="Agregado" />
          <Select.Item text="Frota" value="Frota" />
          <Select.Item text="Cliente" value="Cliente" />
        </Select.Content>
      </Select.Root>
      <Button type="submit" isLoading={isLoading} className="w-full h-full">
        Enviar
      </Button>
    </form>
  );
}
