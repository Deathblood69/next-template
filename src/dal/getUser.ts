import {cache} from 'react'
import {verifySession} from '@/utils/session/verifySession'
import {getSession} from '@/utils/session/getSession'
import {UserEntity} from '@/domains/user/user.entity'

export const getUser = cache(async (id: string) => {
  const sessionExist = await verifySession()
  if (!sessionExist) {
    return undefined
  }

  const session = await getSession()

  if (!session) {
    return undefined
  }

  try {
    const url = 'http://localhost:8080/'
    const path = 'users'
    const query = `?id=${id || session.user.id}`

    const response = await fetch(`${url}${path}${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const getUsers = (await response.json()) as UserEntity[]
    return getUsers[0] satisfies UserEntity
  } catch (error) {
    console.error('Failed to fetch user:', error)
    return null
  }
})
