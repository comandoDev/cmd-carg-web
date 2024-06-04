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
    name: 'IHARA',
  },
  {
    id: '2',
    name: 'BRAVO',
  },
  {
    id: '3',
    name: 'UPL',
  },
  {
    id: '4',
    name: 'Syngenta',
  },
]

export function ComboboxBorrower() {
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
              ? MOCK.find((borrower) => borrower.name === value)?.name
              : 'Selecione um tomador...'}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-[--radix-popover-trigger-width]  p-0"
      >
        <Command>
          <CommandInput placeholder="Pesquisar tomador..." />

          <CommandList>
            <CommandEmpty>Nenhum resultado encontrado</CommandEmpty>

            <CommandGroup>
              {MOCK.map((borrower) => (
                <CommandItem
                  key={borrower.name}
                  value={borrower.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === borrower.name ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {borrower.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
