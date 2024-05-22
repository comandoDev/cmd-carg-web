import { MoreHorizontal } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { TableCell, TableRow } from '@/components/ui/table'

// interface OrderTableRowProps {}

export function DriverTableRow() {
  return (
    <TableRow>
      <TableCell className="font-medium">Diego Schell Fernandes</TableCell>
      <TableCell>568.986.653-76</TableCell>
      <TableCell>(15) 998643522</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" side="left">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText('id')}
            >
              Copiar o ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => {}}>Editar</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                toast.success(
                  `Usuário deletado com sucesso, CLIQUE PARA CANCELAR`,
                )
              }
              className="focus:bg-red-100 focus:text-red-900"
            >
              Deletar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}
