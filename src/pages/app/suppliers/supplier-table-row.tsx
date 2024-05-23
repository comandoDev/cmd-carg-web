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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { TableCell, TableRow } from '@/components/ui/table'

// interface OrderTableRowProps {}

export function SupplierTableRow() {
  return (
    <TableRow>
      <TableCell className="font-medium">498.897.319.43</TableCell>
      <TableCell className="font-medium">
        ARNALDO FUGIHARA E OUTRO- SITIO SÃO SEBASTIÃO
      </TableCell>
      <TableCell>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="xs"
              className="group-hover:bg-primary/15"
            >
              3 Contas Bancárias
              <span className="sr-only">Quantidade de NF</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="max-h-60 w-80 overflow-y-auto"
            side="right"
            align="start"
          >
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">
                  Rodolfo Souza Menezes
                </h4>
                <h4 className="text-sm font-medium leading-none text-muted-foreground">
                  498.897.319.43
                </h4>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Banco do Brasil - Corrente
                </p>
                <p className="text-sm text-muted-foreground">
                  Agência: 4060 - Conta: 423246
                </p>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">
                  Rodolfo Souza Menezes
                </h4>
                <h4 className="text-sm font-medium leading-none text-muted-foreground">
                  498.897.319.43
                </h4>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Banco do Brasil - Corrente
                </p>
                <p className="text-sm text-muted-foreground">
                  Agência: 4060 - Conta: 423246
                </p>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">
                  Rodolfo Souza Menezes
                </h4>
                <h4 className="text-sm font-medium leading-none text-muted-foreground">
                  498.897.319.43
                </h4>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Banco do Brasil - Corrente
                </p>
                <p className="text-sm text-muted-foreground">
                  Agência: 4060 - Conta: 423246
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </TableCell>
      <TableCell>Chapa</TableCell>
      <TableCell>Volume</TableCell>
      <TableCell>R$ 15</TableCell>
      <TableCell>Sorocaba</TableCell>
      <TableCell>SP</TableCell>
      <TableCell>(15) 998578511</TableCell>
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
