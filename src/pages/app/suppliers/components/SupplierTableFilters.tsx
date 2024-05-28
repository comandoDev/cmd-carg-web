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

export function SupplierTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <Input placeholder="Pesquisar..." className="h-10 w-[420px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-10 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos tipos</SelectItem>
          <SelectItem value="pending">Chapa</SelectItem>
          <SelectItem value="canceled">Motorista</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all">
        <SelectTrigger className="h-10 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos serviços</SelectItem>
          <SelectItem value="pending">Tonelada</SelectItem>
          <SelectItem value="canceled">Volume</SelectItem>
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
