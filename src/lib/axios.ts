import { env } from '@/utils/env'
import { storage } from '@/utils/localStorage'
import axios from 'axios'

const token = storage.getToken()

export const authConfig = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
}

export const api = axios.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
})
