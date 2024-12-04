import {RegisterEntity} from '@/auth/types/register/register.entity'

export function parseRegister(
  formData: FormData,
  defaultUser?: RegisterEntity
) {
  return {
    name: `${formData.get('name') || defaultUser?.name}`,
    email: `${formData.get('email') || defaultUser?.email}`,
    password: `${formData.get('password') || defaultUser?.password}`,
    role: `${formData.get('role') || defaultUser?.role}`
  }
}
