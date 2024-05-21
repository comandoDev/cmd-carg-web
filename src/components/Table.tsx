'use client'

import {
  BarChart,
  ChevronLeft,
  ChevronRight,
  Search,
  Trash,
} from 'lucide-react'

import { Button } from './Button'
import { toast } from 'react-toastify'
import { EditModal } from './EditModal'
import { env } from '@/utils/env'
import { api } from '@/lib/axios'
import { storage } from '@/utils/localStorage'
import { useMovimentation } from '@/contexts/MovimentationContext'
import * as Input from '@/components/Input'
import { SyntheticEvent, useEffect, useState } from 'react'

export function Table() {
  const [searchByNf, setSearchByNf] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const {
    pagination: { currentPage, totalPages },
    movimentations,
    getMovimentations,
    isLoadingTable,
  } = useMovimentation()

  const user = storage.getUser()
  const token = storage.getToken()

  const handleDelete = (index: number) => {
    const { id, receipts } = movimentations[index]
    const formattedReceipt = receipts.join(', ').replace(/,(?=[^,]*$)/, ' e ')

    let canceled = false
    const element = document.getElementById(`m-${id}`)
    element?.classList.add('hidden')

    toast.warn(
      `Movimentação será apagada (NF ${formattedReceipt}) Clique para restaurar`,
      {
        onClick: () => {
          canceled = true
          toast.success(`Movimentação restaurada (NF ${formattedReceipt})`)
          element?.classList.remove('hidden')
        },
        onClose: async () => {
          if (!canceled) {
            // await api
            //   .delete(`/auth/ton-handle/${id}`, {
            //     headers: {
            //       Authorization: `Bearer ${token}`,
            //     },
            //   })
            //   .catch(() => {
            //     element?.classList.remove('hidden')
            //     toast.error('Não foi possível apagar')
            //   })
          }
        },
      },
    )
  }

  const handleSearch = async (e: SyntheticEvent) => {
    e.preventDefault()

    setIsSearching(true)
    await getMovimentations({ searchByNf })
    setIsSearching(false)
  }

  useEffect(() => {
    const token = storage.getToken()

    if (user !== undefined && token) {
      getMovimentations()
    }
  }, [])

  return (
    <>
      <div className="w-full flex justify-between">
        <div className="flex justify-center items-center space-x-2">
          <Button
            variant="ghost"
            onClick={() => getMovimentations({ page: 1, searchByNf })}
            disabled={currentPage === 1}
            className="h-10 bg-zinc-200 hover:bg-zinc-300 text-black gap-0"
          >
            <ChevronLeft />
            <ChevronLeft />
          </Button>
          <Button
            variant="ghost"
            onClick={() =>
              getMovimentations({ page: currentPage - 1, searchByNf })
            }
            disabled={currentPage === 1}
            className="h-10 w-10 bg-zinc-200 hover:bg-zinc-300 text-black"
          >
            <ChevronLeft />
          </Button>

          <span className="h-10 w-10 bg-violet-800 text-white rounded-md flex justify-center items-center font-semibold">
            {currentPage}
          </span>

          <Button
            variant="ghost"
            onClick={() =>
              getMovimentations({ page: currentPage + 1, searchByNf })
            }
            disabled={totalPages === currentPage || totalPages === 0}
            className="h-10 w-10 bg-zinc-200 hover:bg-zinc-300 text-black"
          >
            <ChevronRight />
          </Button>
          <Button
            variant="ghost"
            onClick={() => getMovimentations({ page: totalPages, searchByNf })}
            disabled={currentPage === totalPages || totalPages === 0}
            className="h-10 bg-zinc-200 hover:bg-zinc-300 text-black gap-0"
          >
            <ChevronRight />
            <ChevronRight />
          </Button>
        </div>

        <form onSubmit={handleSearch} className="flex gap-2">
          <Input.Root className="h-12 pr-0">
            <Input.Control
              id="search"
              placeholder="Pesquisar pela NF..."
              type="number"
              value={searchByNf}
              onChangeText={setSearchByNf}
            />
            <Input.Prefix>
              <Button
                type="submit"
                isLoading={isSearching}
                className="h-12 w-12 p-0"
              >
                {!isSearching && <Search className="h-5 w-5 m-2 text-white" />}
              </Button>
            </Input.Prefix>
          </Input.Root>
          {user?.role === 'manager' && (
            <Button
              onClick={() => window.open(env.NEXT_PUBLIC_POWER_BI_URL)}
              className="h-12 w-12"
            >
              <BarChart className="h-4 w-4" />
            </Button>
          )}
        </form>
      </div>

      {isLoadingTable ? (
        <div className="h-full rounded-lg w-full bg-zinc-200 animate-pulse" />
      ) : (
        <div className="block w-full overflow-auto rounded-lg border border:bg-zinc-300">
          <table className="w-full">
            <thead className="sticky top-0">
              <tr className="border-b border-zinc-200 bg-violet-800 text-white">
                <th className="w-32 p-3 text-center text-sm font-semibold tracking-wide">
                  NF
                </th>
                <th className="w-28 p-3 text-left text-sm font-semibold tracking-wide">
                  Peso
                </th>
                <th className="w-24 p-3 text-left text-sm font-semibold tracking-wide">
                  Data
                </th>
                <th className="p-3 text-left text-sm font-semibold tracking-wide">
                  Transportadora
                </th>
                <th className="p-3 text-left text-sm font-semibold tracking-wide">
                  Cliente
                </th>
                <th className="p-3 text-left text-sm font-semibold tracking-wide">
                  Motorista
                </th>
                <th className="w-24 p-3 text-left text-sm font-semibold tracking-wide">
                  Placa
                </th>
                <th className="w-24 p-3 text-left text-sm font-semibold tracking-wide">
                  C/ Dia
                </th>
                <th className="w-14 p-3 text-left text-sm font-semibold tracking-wide">
                  Tipo
                </th>
                <th className="w-4 text-left text-sm font-semibold tracking-wide"></th>
                <th className="w-4 text-left text-sm font-semibold tracking-wide"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100/60">
              {movimentations.map((m, index) => {
                const bgColor = index % 2 === 0 ? 'bg-white' : 'bg-zinc-50/50'

                return (
                  <tr
                    key={m.id}
                    id={`m-${m.id}`}
                    className={`hover:bg-violet-100 group ${bgColor}`}
                  >
                    <td className="flex flex-col gap-1 whitespace-nowrap p-3 text-center text-sm font-semibold text-zinc-900">
                      {m.receipts.map((receipt, index) => {
                        return (
                          <span
                            key={receipt + index}
                            className="w-full items-center group-hover:bg-violet-200 justify-around rounded-full bg-zinc-300 bg-opacity-50 p-1.5 text-sm font-semibold tracking-wider text-zinc-800"
                          >
                            {receipt}
                          </span>
                        )
                      })}
                    </td>
                    <td className="whitespace-nowrap p-3 text-sm font-semibold text-zinc-900">
                      {m.weight}
                    </td>
                    <td className="whitespace-nowrap p-3 text-sm text-zinc-700">
                      {m.date}
                    </td>

                    <td className="whitespace-nowrap p-3 text-sm text-zinc-700">
                      {m.shippingCompany}
                    </td>
                    <td className="whitespace-nowrap p-3 text-sm text-zinc-700">
                      {m.client}
                    </td>
                    <td className="whitespace-nowrap p-3 text-sm text-zinc-700">
                      {m.truckDriver}
                    </td>
                    <td className="whitespace-nowrap p-3 text-sm text-zinc-700">
                      {m.truckPlate}
                    </td>
                    <td className="whitespace-nowrap p-3 text-sm text-zinc-700">
                      {m.truckDay}
                    </td>
                    <td className="whitespace-nowrap p-3 text-sm text-zinc-700">
                      {m.type}
                    </td>
                    <td className="whitespace-nowrap p-3 text-sm">
                      <EditModal movimentation={m} />
                    </td>
                    <td className="whitespace-nowrap pr-2 text-sm text-zinc-700">
                      <Button
                        onClick={() => handleDelete(index)}
                        variant="ghost"
                        className="hover:bg-red-300 hover:text-red-900"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
      <div className="h-20" />
    </>
  )
}
