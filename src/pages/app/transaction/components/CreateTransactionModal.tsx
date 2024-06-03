import { ComponentProps, useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { CreateTransactionForm } from './TransactionForm'

export interface CreateTransactionModalProps
  extends ComponentProps<typeof DialogTrigger> {}

export function CreateTransactionModal({
  asChild = true,
  ...props
}: CreateTransactionModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild={asChild} {...props} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo Movimentação</DialogTitle>
        </DialogHeader>
        <CreateTransactionForm closeModal={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
