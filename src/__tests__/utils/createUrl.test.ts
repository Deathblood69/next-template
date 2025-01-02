import {describe, expect, test} from 'vitest'
import {createUrl} from '@/utils/createUrl'
import {Api} from '@/constants/api'

describe(createUrl.name, () => {
  test('no Params', () => {
    const url = createUrl(Api.users)
    expect(url.toString()).toBe('http://localhost:8080/users')
  })
  test('Params', () => {
    const url = createUrl(Api.users, {id: '1'})
    expect(url.toString()).toBe('http://localhost:8080/users?id=1')
  })
})
