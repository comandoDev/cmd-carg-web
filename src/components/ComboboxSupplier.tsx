import { Check, ChevronsUpDown, Search } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { formatter } from '@/utils/formatter'

const MOCK = [
  {
    id: '1',
    cpf: '123.456.789-01',
    name: 'RODOLFO SOUZA MENEZES',
    type: 'Cliente',
  },
  {
    id: '2',
    cpf: '234.567.890-12',
    name: 'GIVANILDO DE SILVA DE CARVALHO',
    type: 'Chapa',
  },
  {
    id: '3',
    cpf: '345.678.901-23',
    name: 'MANUEL NIKALA MAXAD',
    type: 'Motorista Frota',
  },
  {
    id: '4',
    cpf: '456.789.012-34',
    name: 'JOÃO DE MATOS DA SILVA',
    type: 'Motorista Agregado',
  },
  {
    id: '5',
    cpf: '567.890.123-45',
    name: 'BRENO DE MANUAARA',
    type: 'Cliente',
  },
  {
    id: '6',
    cpf: '678.901.234-56',
    name: 'JEAN ANDRADE DE LIMA',
    type: 'Cliente',
  },
  {
    id: '7',
    cpf: '789.012.345-67',
    name: 'PEDRO GERONIMO BERTRÃ',
    type: 'Cliente',
  },
]

export function ComboboxSupplier() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  const [suppliers, setSuppliers] = React.useState(MOCK)
  const [search, setSearch] = React.useState('')

  React.useEffect(() => {
    if (search === '') {
      setSuppliers(MOCK)
    } else {
      setSuppliers(
        MOCK.filter(
          (supplier) =>
            supplier.name.toLowerCase().includes(search.toLowerCase()) ||
            supplier.cpf.includes(search),
        ),
      )
    }
  }, [search])

  return (
    <Popover open={open} onOpenChange={setOpen} modal>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between font-normal"
        >
          <span className="overflow-hidden">
            {value
              ? MOCK.find((supplier) => supplier.name + supplier.cpf === value)
                  ?.name
              : 'Selecione um fornecedor...'}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-[--radix-popover-trigger-width]  p-0"
      >
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />

          <input
            placeholder="Pesquisar fornecedor..."
            value={search}
            onChange={(value) => {
              setSearch(value.currentTarget.value)
              console.log(suppliers)
            }}
            className={cn(
              'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
            )}
          />
        </div>
        <Command>
          <CommandList>
            <CommandEmpty>Nenhum resultado encontrado</CommandEmpty>

            <CommandGroup>
              {suppliers.map((supplier) => (
                <CommandItem
                  key={supplier.name}
                  value={supplier.name + supplier.cpf}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === supplier.name + supplier.cpf
                        ? 'opacity-100'
                        : 'opacity-0',
                    )}
                  />
                  <div className="flex flex-col">
                    <span className="text-xs uppercase text-zinc-900">
                      [ {supplier.type.replace('Motorista ', '')} ] -{' '}
                      {formatter.cpfCnpj(supplier.cpf)}
                    </span>
                    <span className="pb-px text-xs text-zinc-900"></span>
                    {supplier.name}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
