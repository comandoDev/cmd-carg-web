import { TabsTrigger } from '../ui/tabs'

interface FormTabStepTriggerProps {
  label: string
  value: string
  stepErrorsCount: number
}

export function FormTabStepTrigger({
  label,
  value,
  stepErrorsCount,
}: FormTabStepTriggerProps) {
  return (
    <TabsTrigger
      value={value}
      className={`group ${stepErrorsCount && 'data-[state=active]:border-b-red-600 data-[state=active]:text-red-600'}`}
    >
      {label}{' '}
      {!!stepErrorsCount && (
        <div className="ml-2 flex h-4 w-4 items-center justify-center rounded-full bg-muted-foreground text-[0.6rem] text-white group-data-[state=active]:bg-red-600">
          {stepErrorsCount}
        </div>
      )}
    </TabsTrigger>
  )
}
