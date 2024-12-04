import {UserSession} from '@/types/UserSession'

export type SessionPayload = {
  user: UserSession
  expiresAt: Date
}
