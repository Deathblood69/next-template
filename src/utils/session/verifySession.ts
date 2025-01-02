import {cache} from 'react'
import {cookies} from 'next/headers'
import decrypt from '@/utils/encryption/decrypt'

export const verifySession = cache(async () => {
  const cookieStore = await cookies()
  const cookie = cookieStore.get('session')?.value

  const session = await decrypt(cookie)

  return Boolean(session)
})
