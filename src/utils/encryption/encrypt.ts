import {SessionPayload} from '@/types/SessionPayload'
import {SignJWT} from 'jose'
import {ENCODED_KEY} from '@/constants/config/encyrption.config'

export default async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({alg: 'HS256'})
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(ENCODED_KEY)
}
