'use client'

import { SyntheticEvent, useState } from 'react'

import * as Input from '@/components/Input'
import { Eye, EyeOff, User } from 'lucide-react'
import { Button } from '@/components/Button'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/axios'
import { toast } from 'react-toastify'
import { ILoginResponse } from '@/@types/auth'
import { storage } from '@/utils/localStorage'
import { useMovimentation } from '@/contexts/MovimentationContext'

export function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { getMovimentations } = useMovimentation()

  const handleAuth = async (e: SyntheticEvent) => {
    e.preventDefault()

    setIsLoading(true)
    await api
      .post<ILoginResponse>('/unauth/signin', { email, password })
      .then(async (res) => {
        const { token, user } = res.data.data

        storage.setToken(token)
        storage.setUser(user)

        getMovimentations()
        router.replace('/')
      })
      .catch((error) => {
        const message = error.response.data.message
        toast.error(message || 'Não foi possível realizar o Login')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <form onSubmit={handleAuth} className="w-full space-y-2">
      <Input.Root className="bg-zinc-100">
        <Input.Control
          id="user"
          placeholder="Usuário"
          value={email}
          onChangeText={setEmail}
        />
        <Input.Prefix>
          <User className="h-5 w-5 m-2 text-zinc-500" />
        </Input.Prefix>
      </Input.Root>
      <Input.Root className="bg-zinc-100">
        <Input.Control
          id="password"
          type={isVisible ? 'text' : 'password'}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
        />
        <Input.Prefix>
          <Button
            type="button"
            variant="ghost"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? (
              <Eye className="h-5 w-5 text-zinc-500" />
            ) : (
              <EyeOff className="h-5 w-5 text-zinc-500" />
            )}
          </Button>
        </Input.Prefix>
      </Input.Root>
      <Button
        type="submit"
        isLoading={isLoading}
        disabled={!email || !password}
        className="w-full p-4"
      >
        Entrar
      </Button>
    </form>
  )
}
