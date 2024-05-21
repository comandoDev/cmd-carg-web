'use client'

import * as SelectRadix from '@radix-ui/react-select'

type SelectProps = SelectRadix.SelectProps

export function Root({ children, ...rest }: SelectProps) {
  return <SelectRadix.Root {...rest}>{children}</SelectRadix.Root>
}
