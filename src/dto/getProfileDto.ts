import {getSession} from '@/utils/session/getSession'
import {getUser} from '@/dal/getUser'
import {UserEntity} from '@/domains/user/user.entity'

export default async function getProfileDTO(id?: string) {
  const session = await getSession()

  if (!session?.user?.id) {
    return undefined
  }

  const idUser = id || session?.user?.id
  const currentUser = await getUser(idUser)

  // Or return only what's specific to the query here
  if (currentUser) {
    const username = currentUser.name
    const phoneNumber = canSeeRole(currentUser, currentUser.role)
      ? currentUser.role
      : undefined

    return {
      name: username,
      role: phoneNumber
    }
  }
}

function canSeeRole(viewer: UserEntity, team: string) {
  return viewer.role === 'admin' || team === viewer.team
}
