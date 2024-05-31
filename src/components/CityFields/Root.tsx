import axios from 'axios'
import { createContext, ReactNode, useContext, useState } from 'react'
import { toast } from 'sonner'

import { UFValue } from './city.mock'

const apiCities = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1',
})

type CityFieldContextType = {
  cities: string[]
  fetchCities: (uf: UFValue) => Promise<void>
}

const CityFieldContext = createContext({} as CityFieldContextType)

export function Root({ children }: { children: ReactNode }) {
  const [cities, setCities] = useState<string[]>([])

  const fetchCities = async (uf: UFValue) => {
    const response = await apiCities.get<{ nome: string }[]>(
      `localidades/estados/${uf}/municipios`,
      {
        params: {
          orderBy: 'nome',
        },
      },
    )

    if (!response.data) {
      toast.error('Não foi possível buscar as cidades')
      return
    }

    const citiesResponse = response.data.map((city) => city.nome)

    setCities(citiesResponse)
  }

  return (
    <CityFieldContext.Provider value={{ cities, fetchCities }}>
      {children}
    </CityFieldContext.Provider>
  )
}

export const useCityField = () => useContext(CityFieldContext)
