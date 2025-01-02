import {cookies} from 'next/headers'
import decrypt from '@/utils/encryption/decrypt'
import {SessionPayload} from '@/types/SessionPayload'

export async function getSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get('session')?.value
  const payload = await decrypt(session)

  if (!session || !payload) {
    return null
  }
  return payload as SessionPayload
}
