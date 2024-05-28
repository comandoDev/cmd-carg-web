import { z } from 'zod'

export const completeNameSchema = z.string().refine(
  (val) => {
    const slices = val.trim().split(' ')
    return slices.length > 1 && slices.every((slice) => slice.length > 0)
  },
  {
    message: 'Insira pelo menos um nome e um sobrenome',
  },
)
