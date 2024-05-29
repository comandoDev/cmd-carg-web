import { Tabs, TabsList } from '@/components/ui/tabs'

import { FormButtonArea as ButtonArea } from './ButtonArea'
import { FormField as Field } from './Field'
import { FormInput as Input } from './Input'
import { FormProvider as Provider } from './Provider'
import { FormStepContent as StepContent } from './StepContent'
import { FormTabStepTrigger as TabStepTrigger } from './TabStepTrigger'

const MultiStepRoot = Tabs
const TabsStepList = TabsList

export {
  Provider,
  Field,
  ButtonArea,
  Input,
  MultiStepRoot,
  TabsStepList,
  TabStepTrigger,
  StepContent,
}
