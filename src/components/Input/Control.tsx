import { ComponentProps, useEffect } from 'react'
import { useInput } from './Root'

interface InputControlProps extends ComponentProps<'input'> {
  onChangeText?: (value: string) => void
}

export function Control({
  onChangeText,
  onChange,
  ...props
}: InputControlProps) {
  const { handleShowLabel, showLabel } = useInput()

  useEffect(() => {
    handleShowLabel(props.defaultValue !== undefined)
  }, [])

  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-400 outline-none dark:text-zinc-100 dark:placeholder-zinc-400"
      onChange={(e) => {
        const { value } = e.currentTarget

        !showLabel && value && handleShowLabel(true)
        showLabel && !value && handleShowLabel(false)

        onChange && onChange(e)
        onChangeText && onChangeText(value)
      }}
      {...props}
    />
  )
}
