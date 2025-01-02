import {jwtVerify} from 'jose'
import {ENCODED_KEY} from '@/constants/config/encyrption.config'

export default async function decrypt(session: string | undefined = '') {
  if (!session) {
    return undefined
  }

  try {
    const {payload} = await jwtVerify(session, ENCODED_KEY, {
      algorithms: ['HS256']
    })
    return payload
  } catch (error) {
    console.error('Session error:', error)
    return undefined
  }
}
