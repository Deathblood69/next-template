import {describe, expect, test} from 'vitest'
import {parseFormData} from '@/utils/parseFormData'

describe(parseFormData.name, () => {
  test('no data in FormData', () => {
    const formData = new FormData()
    const data = parseFormData(formData)
    expect(data).toStrictEqual({})
  })
  test('FormData with data', () => {
    const formData = new FormData()
    formData.append('string', 'test')
    formData.append('number', '-1')
    formData.append('boolean', 'true')
    formData.append('object', '{"object": "object"}')
    formData.append('array', '["array"]')
    const data = parseFormData(formData)
    expect(data).toStrictEqual({
      string: 'test',
      number: '-1',
      boolean: 'true',
      object: '{"object": "object"}',
      array: '["array"]'
    })
  })
})
