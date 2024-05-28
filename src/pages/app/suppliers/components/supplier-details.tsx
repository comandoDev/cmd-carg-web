import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { CreateSupplierForm } from './SupplierForm/CreateSupplierForm'

export function SupplierDetails() {
  return (
    <DialogContent className="h-[70vh]">
      <DialogHeader>
        <DialogTitle>Novo Prestador</DialogTitle>
      </DialogHeader>

      <CreateSupplierForm />
    </DialogContent>
  )
}
