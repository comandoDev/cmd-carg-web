import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

import { TabsContent } from '../ui/tabs'

export function FormStepContent({
  className,
  ...props
}: ComponentProps<typeof TabsContent>) {
  return <TabsContent className={cn('space-y-6  py-4', className)} {...props} />
}
