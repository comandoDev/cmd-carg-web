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

export function TransactionTableRow() {
  return (
    <TableRow>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="xs"
              className="group-hover:bg-primary/15"
            >
              3 NFs
              <span className="sr-only">Quantidade de NF</span>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="start"
            side="right"
            className="max-h-56 overflow-y-scroll"
          >
            {[
              '8908',
              '11534',
              '660',
              '3140',
              '3144',
              '3147',
              '3146',
              '3145',
              '3150',
              '3149',
              '3148',
              '3143',
              '3141',
              '3153',
              '3156',
            ].map((nf, index) => {
              return (
                <div key={index}>
                  {index !== 0 && <DropdownMenuSeparator />}
                  <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    <span>{nf}</span>
                  </DropdownMenuItem>
                </div>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
      <TableCell className="text-muted-foreground">09/09/2024</TableCell>
      <TableCell className="font-medium">Diego Schell Fernandes</TableCell>
      <TableCell>Aparecida de Goiânia</TableCell>
      <TableCell>Diego Schell Fernandes</TableCell>
      <TableCell>Syngenta</TableCell>
      <TableCell>1490,90 KG</TableCell>
      <TableCell>R$ 149,90</TableCell>
      <TableCell>Reembolso</TableCell>
      <TableCell>Agregado</TableCell>
      <TableCell>Volume</TableCell>
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
