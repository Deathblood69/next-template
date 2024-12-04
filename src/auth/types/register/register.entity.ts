export interface RegisterEntity {
  name: string
  email: string
  password: string
  role?: string
}

export const RegisterDefault: RegisterEntity = {
  name: '',
  email: '',
  password: '',
  role: 'users'
}
