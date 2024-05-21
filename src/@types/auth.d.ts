export interface IUser {
  id: string
  name: string
  email: string
  role: string
  branch: string
}

export interface IUserResponse extends IUser {
  active: boolean
  branch: {
    id: string
    name: string
    createdAt: string
  }
}

export interface ILoginResponse {
  data: {
    token: string
    user: IUserResponse
  }
}
