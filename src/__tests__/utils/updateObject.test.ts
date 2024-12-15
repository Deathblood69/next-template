import {describe, expect, test} from 'vitest'
import {updateObject} from '@/utils/updateObject'

describe(updateObject.name, () => {
  test('update key of object', () => {
    const object = {a: 1, b: 2, c: 3}
    const newObject = updateObject('d', 4, object)
    expect(newObject).toStrictEqual({a: 1, b: 2, c: 3, d: 4})
  })
  test('create new object', () => {
    const newObject = updateObject('d', 4)
    expect(newObject).toStrictEqual({d: 4})
  })
})
