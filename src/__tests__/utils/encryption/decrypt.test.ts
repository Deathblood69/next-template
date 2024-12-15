// @vitest-environment node

import {describe, expect, test} from 'vitest'
import decrypt from '@/utils/encryption/decrypt'

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiMTIzIiwicm9sZSI6InVzZXIifSwiZXhwaXJlc0F0IjoiMjAyNC0xMi0yM1QyMjowOTowNC4yNDBaIiwiaWF0IjoxNzM0Mzg2OTQ0LCJleHAiOjE3MzQ5OTE3NDR9.OHM-Jb1vNAmteho-tJq5lvjDzkuqC-jwxGenUIsK4c4'

describe(decrypt.name, () => {
  test('no session', async () => {
    const payload = await decrypt()
    expect(payload).toBeUndefined()
  })
  test('with session', async () => {
    const payload = await decrypt(token)
    expect(payload).toStrictEqual({
      exp: 1734991744,
      expiresAt: '2024-12-23T22:09:04.240Z',
      iat: 1734386944,
      user: {
        id: '123',
        role: 'user'
      }
    })
  })
})
