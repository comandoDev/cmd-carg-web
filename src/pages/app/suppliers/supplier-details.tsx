import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SupplierDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Novo Prestador</DialogTitle>
      </DialogHeader>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="">Documento (CNPJ/CPF)</Label>
            <Input />
          </div>

          <div className="space-y-2">
            <Label htmlFor="">Nome Fantasia</Label>
            <Input />
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

        <div className="space-y-4 py-4">
          <div className="flex w-full justify-between">
            <Label className="text-xl">Contas bancárias</Label>
            <Button variant="link">Adicionar +</Button>
          </div>
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
        </div>

        <Button className="w-full" type="submit">
          Enviar
        </Button>
      </form>
    </DialogContent>
  )
}
