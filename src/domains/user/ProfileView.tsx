import {getProfileDTO} from '@/utils/dto'
import {Fragment} from 'react'

export default async function ProfileView() {
  const profile = await getProfileDTO()

  return (
    <Fragment>
      <h1>Profile</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </Fragment>
  )
}
