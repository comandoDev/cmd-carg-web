import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function DriverDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Novo Motorista</DialogTitle>
      </DialogHeader>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="">Documento (CNPJ/CPF)</Label>
          <Input />
        </div>

        <div className="space-y-2">
          <Label htmlFor="">Nome</Label>
          <Input />
        </div>
        <div className="space-y-2">
          <Label htmlFor="">Telefone</Label>
          <Input />
        </div>

        <Button className="w-full" type="submit">
          Enviar
        </Button>
      </form>
    </DialogContent>
  )
}
