import { IUser, IUserResponse } from '@/@types/auth'

const isWindowDefined = () => {
  return typeof window !== 'undefined'
}

const setUser = (user: IUserResponse) => {
  if (isWindowDefined()) {
    const curentUser: IUser = {
      branch: user.branch.name,
      email: user.email,
      id: user.id,
      name: user.name,
      role: user.role,
    }

    localStorage.setItem('user', JSON.stringify(curentUser))
  }
}

const getUser = () => {
  if (isWindowDefined()) {
    const user = localStorage.getItem('user')
    if (!user) return null

    return JSON.parse(user) as IUser
  }

  return null
}

const setToken = (token: string) => {
  if (isWindowDefined()) {
    localStorage.setItem('token', token)
  }
}

const getToken = () => {
  if (isWindowDefined()) {
    return localStorage.getItem('token')
  }
  return null
}

const clear = (): void => {
  if (isWindowDefined()) {
    localStorage.clear()
  }
}

export const storage = { setUser, getUser, setToken, getToken, clear }
