import { ComponentProps, useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { CreateDriverForm } from './DriverForm'

export interface CreateDriverModalProps
  extends ComponentProps<typeof DialogTrigger> {}

export function CreateDriverModal({
  asChild = true,
  ...props
}: CreateDriverModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild={asChild} {...props} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo Motorista</DialogTitle>
        </DialogHeader>
        <CreateDriverForm closeModal={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
