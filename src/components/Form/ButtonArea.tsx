import { ReactNode } from 'react'

interface FormButtonAreaProps {
  children: ReactNode | ReactNode[]
}

export function FormButtonArea({ children }: FormButtonAreaProps) {
  return <div className="flex justify-end space-x-4">{children}</div>
}
