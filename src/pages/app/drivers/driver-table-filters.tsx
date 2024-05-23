import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function DriverTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <Input placeholder="Pesquisar..." className="h-10 w-[420px]" />

      <Button variant="secondary" type="submit">
        <Search className="h-4 w-4" />
      </Button>
      <Button variant="outline" type="button">
        <X className="h-4 w-4" />
      </Button>
    </form>
  )
}
