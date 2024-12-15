// @vitest-environment node

import {describe, test} from 'vitest'
import encrypt from '@/utils/encryption/encrypt'
import {SessionPayload} from '@/types/SessionPayload'

describe(encrypt.name, () => {
  test('with session', async () => {
    const sessionPayload: SessionPayload = {
      user: {
        id: '123', // Remplacez ceci par les données que vous souhaitez tester
        role: 'user'
      },
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    }

    // Encrypt
    const token = await encrypt(sessionPayload)
    console.log('Encrypted Token:', token)
  })
})
