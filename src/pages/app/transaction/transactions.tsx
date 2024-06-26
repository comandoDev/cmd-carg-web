import { Plus } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { CreateTransactionModal } from './components/CreateTransactionModal'
import { TransactionTableFilters } from './components/TransactionTableFilters'
import { TransactionTableRow } from './components/TransactionTableRow'

export function Transactions() {
  return (
    <>
      <Helmet title="Movimentações" />

      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold tracking-tight">Movimentações</h1>
        <div className="space-y-8">
          <div className="flex w-full justify-between">
            <TransactionTableFilters />
            <CreateTransactionModal>
              <Button>
                <Plus className="mr-4 h-4 w-4" />
                Nova movimentação
              </Button>
            </CreateTransactionModal>
          </div>

          <div className="overflow-hidden rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[120px]">Realizado em</TableHead>
                  <TableHead>Fornecedor</TableHead>
                  <TableHead>Filial</TableHead>
                  <TableHead>Motorista</TableHead>
                  <TableHead>Tomador</TableHead>
                  <TableHead className="w-[110px]">Peso</TableHead>
                  <TableHead className="w-[110px]">Valor</TableHead>
                  <TableHead className="w-[120px]">T. Pagamento</TableHead>
                  <TableHead className="w-[120px]">T. Contrato</TableHead>
                  <TableHead className="w-[120px]">T. Carga</TableHead>
                  <TableHead className="w-[31px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => {
                  return <TransactionTableRow key={i} />
                })}
              </TableBody>
            </Table>
          </div>

          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
