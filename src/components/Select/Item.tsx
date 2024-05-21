'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

interface SelectItemProps extends Select.SelectItemProps {
  text: string
}

export function Item({ text, ...props }: SelectItemProps) {
  return (
    <Select.Item
      className="group flex items-center justify-between gap-2 px-3 py-2.5 outline-none hover:cursor-pointer  data-[highlighted]:text-white data-[state=checked]:bg-violet-200 data-[state=checked]:hover:bg-violet-600 data-[state=checked]:hover:text-white data-[state=checked]:text-violet-800 data-[highlighted]:bg-violet-600 dark:data-[highlighted]:bg-zinc-700"
      {...props}
    >
      <Select.ItemText>
        <span>{text}</span>
      </Select.ItemText>
      <Select.ItemIndicator>
        <Check className="group-data-[highlighted]:text-white h-4 w-4 text-violet-500 dark:text-violet-300" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
