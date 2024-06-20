import * as React from 'react'

import { cn } from '@/lib/utils'
import { formatter } from '@/utils/formatter'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  mask?: keyof typeof formatter
  onChangeText?: (value: string) => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, onChange, onChangeText, mask, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        onChange={(e) => {
          const { value } = e.target

          if (mask) {
            const maskedValue = formatter[mask](value)

            e.target.value = maskedValue
          }

          onChangeText && onChangeText(value)
          onChange && onChange(e)
        }}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
