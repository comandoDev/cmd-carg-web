export type ITonType = 'Carga' | 'Descarga'

export interface ITonHandlePayload {
  receipts?: string[]
  weight?: number
  date?: Date
  shippingCompany?: string
  client?: string
  truckDriver?: string
  truckPlate?: string
  truckDay?: number
  type?: ITonType
}

export interface ITonHandle {
  id: string
  receipts: string[]
  weight: number
  date: string
  shippingCompany: string
  client: string
  truckDriver: string
  truckPlate: string
  truckDay: number
  type: ITonType
  enable: boolean
}

export interface IRecords {
  next: boolean
  previous: boolean
  totalDocs: number
  totalPages: number
  docs: ITonHandle[]
}

export interface ITonHandleResponse {
  data: {
    records: IRecords
  }
}
