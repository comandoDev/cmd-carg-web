import { useFormContext } from 'react-hook-form'

import * as Form from '@/components/Form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { SupplierFormFieldsType } from './formSchema'

export function SupplierFormFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext<SupplierFormFieldsType>()

  return (
    <>
      <Tabs defaultValue="general" className="w-full">
        <TabsList>
          <TabsTrigger value="general">Geral</TabsTrigger>
          <TabsTrigger value="bank-account">Contas Bancárias</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="space-y-5 py-4">
          <div className="grid grid-cols-2 gap-4">
            <Form.Input
              label="Documento (CNPJ/CPF)"
              mask="cpfCnpj"
              error={errors.document?.message}
              {...register('document')}
            />
            <Form.Input
              label="Nome Fantasia"
              error={errors.name?.message}
              {...register('name')}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="">Tipo de Prestador</Label>
              <Input />
            </div>

            <div className="space-y-2">
              <Label htmlFor="">Tipo de Serviço</Label>
              <Input />
            </div>

            <div className="space-y-2">
              <Form.Input
                label="Valor"
                mask="currency"
                maxLength={12}
                error={errors.value?.message}
                {...register('value')}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="">Cidade</Label>
              <Input />
            </div>
            <div className="space-y-2">
              <Label htmlFor="">UF</Label>
              <Input />
            </div>

            <div className="space-y-2">
              <Label htmlFor="">Celular</Label>
              <Input />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="bank-account" className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="">Documento Titular (CNPJ/CPF)</Label>
              <Input />
            </div>

            <div className="space-y-2">
              <Label htmlFor="">Nome Titular</Label>
              <Input />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="">Banco</Label>
              <Input />
            </div>

            <div className="space-y-2">
              <Label htmlFor="">Conta</Label>
              <Input />
            </div>

            <div className="space-y-2">
              <Label htmlFor="">Agência</Label>
              <Input />
            </div>

            <div className="space-y-2">
              <Label htmlFor="">Tipo da conta</Label>
              <Input />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="">Observação</Label>
            <Input />
          </div>
          <Button
            className="w-full border-primary text-primary hover:bg-primary/5 hover:text-primary"
            variant="outline"
          >
            Nova conta bancária
          </Button>
        </TabsContent>
      </Tabs>
    </>
  )
}
