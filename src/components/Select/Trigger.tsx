'use client'

import * as SelectRadix from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

interface SelectTriggerProps extends SelectRadix.SelectTriggerProps {
  placeholder: string
}

export function Trigger({
  placeholder,
  children,
  className,
  ...rest
}: SelectTriggerProps) {
  if (children) {
    return <SelectRadix.Trigger {...rest}>{children}</SelectRadix.Trigger>
  }

  return (
    <SelectRadix.Trigger
      className={`${className} flex h-14 w-full bg-white items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-50 data-[placeholder]:text-zinc-400 dark:border-zinc-800 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20 dark:data-[placeholder]:text-zinc-100`}
      {...rest}
    >
      <SelectRadix.Value placeholder={placeholder} className="text-black" />
      <SelectRadix.Icon>
        <ChevronDown className="h-5 w-5 text-zinc-500" />
      </SelectRadix.Icon>
    </SelectRadix.Trigger>
  )
}
