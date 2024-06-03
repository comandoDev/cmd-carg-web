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

import { CreateDriverModal } from './CreateDriverModal'
import { DriverTableFilters } from './driver-table-filters'
import { DriverTableRow } from './driver-table-row'

export function Drivers() {
  return (
    <>
      <Helmet title="Motoristas" />

      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold tracking-tight">Motoristas</h1>
        <div className="space-y-8">
          <div className="flex w-full justify-between">
            <DriverTableFilters />
            <CreateDriverModal>
              <Button>
                <Plus className="mr-4 h-4 w-4" />
                Novo motorista
              </Button>
            </CreateDriverModal>
          </div>

          <div className="overflow-hidden rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Motorista</TableHead>
                  <TableHead className="w-[180px]">CPF</TableHead>
                  <TableHead className="w-[180px]">Celular</TableHead>
                  <TableHead className="w-[20px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => {
                  return <DriverTableRow key={i} />
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
