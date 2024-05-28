import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function SupplierDetails() {
  return (
    <DialogContent className="h-[70vh]">
      <DialogHeader>
        <DialogTitle>Novo Prestador</DialogTitle>
      </DialogHeader>

      <form className="space-y-4">
        <Tabs defaultValue="general" className="w-full">
          <TabsList>
            <TabsTrigger value="general">Geral</TabsTrigger>
            <TabsTrigger value="bank-account">Contas Bancárias</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="">Documento (CNPJ/CPF)</Label>
                <Input mask="cpfCnpj" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="">Nome Fantasia</Label>
                <Input mask="capitalize" />
              </div>
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
                <Label htmlFor="">Valor</Label>
                <Input />
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

        <Button className="w-full" type="submit">
          Enviar
        </Button>
      </form>
    </DialogContent>
  )
}
