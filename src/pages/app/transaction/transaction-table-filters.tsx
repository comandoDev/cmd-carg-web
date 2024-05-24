import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function TransactionTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <Input placeholder="Pesquisar..." className="h-10 w-[420px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-10 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos cargas</SelectItem>
          <SelectItem value="pending">Volume</SelectItem>
          <SelectItem value="canceled">Peso</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all">
        <SelectTrigger className="h-10 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos contrato</SelectItem>
          <SelectItem value="pending">Agregado</SelectItem>
          <SelectItem value="canceled">Frota</SelectItem>
          <SelectItem value="canceled">Cliente</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all">
        <SelectTrigger className="h-10 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos pagamento</SelectItem>
          <SelectItem value="delivered">Carga</SelectItem>
          <SelectItem value="delivered">Descarga</SelectItem>
          <SelectItem value="delivered">Reembolso</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="secondary" type="submit">
        <Search className="h-4 w-4" />
      </Button>
      <Button variant="outline" type="button">
        <X className="h-4 w-4" />
      </Button>
    </form>
  )
}
