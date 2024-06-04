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
    name: 'RODOLFO SOUZA MENEZES',
    cpf: '123.456.789-01',
    id: '1',
  },
  {
    name: 'GIVANILDO DE SILVA DE CARVALHO',
    cpf: '234.567.890-12',
    id: '2',
  },
  {
    name: 'MANUEL NIKALA MAXAD',
    cpf: '345.678.901-23',
    id: '3',
  },
  {
    name: 'JOÃO DE MATOS DA SILVA',
    cpf: '456.789.012-34',
    id: '4',
  },
  {
    name: 'BRENO DE MANUAARA',
    cpf: '567.890.123-45',
    id: '5',
  },
  {
    name: 'JEAN ANDRADE DE LIMA',
    cpf: '678.901.234-56',
    id: '6',
  },
  {
    name: 'PEDRO GERONIMO BERTRÃ',
    cpf: '789.012.345-67',
    id: '7',
  },
]

export function ComboboxDriver() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  const [drivers, setDrivers] = React.useState(MOCK)
  const [search, setSearch] = React.useState('')

  React.useEffect(() => {
    if (search === '') {
      setDrivers(MOCK)
    } else {
      setDrivers(
        MOCK.filter(
          (driver) =>
            driver.name.toLowerCase().includes(search.toLowerCase()) ||
            driver.cpf.includes(search),
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
              ? MOCK.find((driver) => driver.name + driver.cpf === value)?.name
              : 'Selecione um motorista...'}
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
            placeholder="Pesquisar motorista..."
            value={search}
            onChange={(value) => {
              setSearch(value.currentTarget.value)
              console.log(drivers)
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
              {drivers.map((driver) => (
                <CommandItem
                  key={driver.name}
                  value={driver.name + driver.cpf}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === driver.name + driver.cpf
                        ? 'opacity-100'
                        : 'opacity-0',
                    )}
                  />
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-900">
                      {formatter.cpfCnpj(driver.cpf)}
                    </span>
                    {driver.name}
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
