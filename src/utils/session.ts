import 'server-only'

import {cookies} from 'next/headers'
import {UserSession} from '@/types/UserSession'
import {SessionPayload} from '@/types/SessionPayload'
import {cache} from 'react'
import {decrypt, encrypt} from '@/utils/encryption'

export async function createSession(user: UserSession) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = await encrypt({user, expiresAt})
  const cookieStore = await cookies()
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/'
  })
}

export async function getSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get('session')?.value
  const payload = await decrypt(session)

  if (!session || !payload) {
    return null
  }
  return payload as SessionPayload
}

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

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
}

export const verifySession = cache(async () => {
  const cookieStore = await cookies()
  const cookie = cookieStore.get('session')?.value

  const session = await decrypt(cookie)

  return Boolean(session)
})
