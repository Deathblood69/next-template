import {Fragment} from 'react'
import getProfileDTO from '@/dto/getProfileDto'

export default async function ProfileView() {
  const profile = await getProfileDTO()

  return (
    <Fragment>
      <h1>Profile</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </Fragment>
  )
}
