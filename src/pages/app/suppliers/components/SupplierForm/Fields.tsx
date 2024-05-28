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

  const generalStepErrorCount = [errors.document?.message].filter(
    Boolean,
  ).length
  const bankAccountStepErrorCount = [errors.name?.message].filter(
    Boolean,
  ).length

  return (
    <>
      <Tabs defaultValue="general" className="w-full">
        <TabsList>
          <TabsTrigger
            value="general"
            className={`group ${generalStepErrorCount && 'data-[state=active]:border-b-red-600 data-[state=active]:text-red-600'}`}
          >
            Geral{' '}
            {!!generalStepErrorCount && (
              <span className="ml-2 h-4 w-4 rounded-full bg-muted-foreground text-xs text-white group-data-[state=active]:bg-red-600">
                {generalStepErrorCount}
              </span>
            )}
          </TabsTrigger>
          <TabsTrigger
            value="bank-account"
            className={`group ${bankAccountStepErrorCount && 'data-[state=active]:border-b-red-600 data-[state=active]:text-red-600'}`}
          >
            Contas Bancárias{' '}
            {!!bankAccountStepErrorCount && (
              <span className="ml-2 h-4 w-4 rounded-full bg-muted-foreground text-xs text-white group-data-[state=active]:bg-red-600">
                {bankAccountStepErrorCount}
              </span>
            )}
          </TabsTrigger>
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
