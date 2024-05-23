import { Plus } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { SupplierDetails } from './supplier-details'
import { SupplierTableFilters } from './supplier-table-filters'
import { SupplierTableRow } from './supplier-table-row'

export function Suppliers() {
  return (
    <>
      <Helmet title="Prestadores" />

      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold tracking-tight">Prestadores</h1>
        <div className="space-y-8">
          <div className="flex w-full justify-between">
            <SupplierTableFilters />
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-4 h-4 w-4" />
                  Novo prestador
                </Button>
              </DialogTrigger>
              <SupplierDetails />
            </Dialog>
          </div>

          <div className="bSupplier overflow-hidden rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[110px]">Documento</TableHead>
                  <TableHead>Prestador</TableHead>
                  <TableHead>Contas Bancárias</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Serviço</TableHead>
                  <TableHead className="w-[110px]">Valor</TableHead>
                  <TableHead className="max-w-[200px]">Cidade</TableHead>
                  <TableHead className="w-[30px]">UF</TableHead>
                  <TableHead className="w-[140px]">Celular</TableHead>
                  <TableHead className="w-[30px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => {
                  return <SupplierTableRow key={i} />
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
