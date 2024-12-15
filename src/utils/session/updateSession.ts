import {UserSession} from '@/types/UserSession'
import {cookies} from 'next/headers'
import decrypt from '@/utils/encryption/decrypt'
import createSession from '@/utils/session/createSession'

export async function updateSession(user?: UserSession) {
  if (user) {
    await createSession(user)
    return undefined
  }

  const cookieStore = await cookies()
  const session = cookieStore.get('session')?.value
  const payload = await decrypt(session)

  if (!session || !payload) {
    return undefined
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: 'lax',
    path: '/'
  })
}
