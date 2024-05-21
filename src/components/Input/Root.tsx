import { ComponentProps, useState, createContext, useContext } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputRootProps extends ComponentProps<'div'> {
  label?: string
}

type InputContextType = {
  showLabel: boolean
  handleShowLabel: (showLabel: boolean) => void
}

const InputContext = createContext({} as InputContextType)

export function Root({ className, label, children, ...props }: InputRootProps) {
  const [showLabel, setShowLabel] = useState(false)

  return (
    <InputContext.Provider
      value={{
        showLabel,
        handleShowLabel: setShowLabel,
      }}
    >
      <div
        className={twMerge(
          'flex w-full items-center gap-2 rounded-lg border bg-white border-zinc-300 px-2 py-2 shadow-sm box-border h-14',
          'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-50',
          'dark:border-zinc-800 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20',
          className,
        )}
        {...props}
      >
        <div className="flex-col w-full flex">
          {showLabel && (
            <label className="uppercase text-[10px] font-bold text-zinc-700">
              {label}
            </label>
          )}
          <div className="w-full flex gap-2 items-center">{children}</div>
        </div>
      </div>
    </InputContext.Provider>
  )
}

export const useInput = () => useContext(InputContext)
