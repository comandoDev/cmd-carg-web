import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const MOCK = [
  {
    id: '1',
    name: 'Aurora',
  },
  {
    id: '2',
    name: 'Indaiatuba',
  },
  {
    id: '3',
    name: 'M5',
  },
  {
    id: '4',
    name: 'Cuiabá',
  },
]

export function ComboboxBranch() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

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
              ? MOCK.find((branch) => branch.name === value)?.name
              : 'Selecione uma filial...'}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-[--radix-popover-trigger-width]  p-0"
      >
        <Command>
          <CommandInput placeholder="Pesquisar filial..." />

          <CommandList>
            <CommandEmpty>Nenhum resultado encontrado</CommandEmpty>

            <CommandGroup>
              {MOCK.map((branch) => (
                <CommandItem
                  key={branch.name}
                  value={branch.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === branch.name ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {branch.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
