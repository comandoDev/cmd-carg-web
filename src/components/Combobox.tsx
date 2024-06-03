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
import { formatter } from '@/utils/formatter'

const frameworks = [
  {
    value: 'RODOLFO SOUZA MENEZES',
    label: 'RODOLFO SOUZA MENEZES',
  },
  {
    value: 'GIVANILDO DE SILVA DE CARVALHO',
    label: 'GIVANILDO DE SILVA DE CARVALHO IOKIKHK KÇLKLÇK',
  },
  {
    value: 'LUCAS MARQUES',
    label: 'LUCAS MARQUES',
  },
]

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between font-normal"
        >
          <span className="overflow-hidden">
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : 'Selecione um motorista...'}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="min-w-[--radix-popover-trigger-width]  p-0"
      >
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === framework.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-900">
                      {formatter.cpfCnpj('567469807536')}
                    </span>
                    {framework.label}
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
