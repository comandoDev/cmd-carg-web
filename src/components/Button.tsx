import { ComponentProps } from 'react'
import { ClipLoader } from 'react-spinners'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'flex justify-center items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm outline-none uppercase',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500 disabled:bg-zinc-400 disabled:text-zinc-600',
  ],

  variants: {
    variant: {
      primary:
        'bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-800',
      disabled: 'bg-zinc-600 text-white',
      outline:
        'border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:text-zinc-200 dark:border-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white dark:hover:border-white',
      ghost:
        'rounded-md px-2 hover:bg-zinc-50 shadow-none 0 text-zinc-500 dark:hover:bg-white/5 dark:text-zinc-40',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {
  isLoading?: boolean
}

export function Button({
  variant,
  className,
  disabled,
  isLoading,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={!!(isLoading || disabled)}
      className={button({ variant, className })}
      {...props}
    >
      {children}
      {isLoading && (
        <ClipLoader
          loading={isLoading}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </button>
  )
}
