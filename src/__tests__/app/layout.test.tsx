import {describe, expect, test} from 'vitest'
import {render} from '@testing-library/react'
import Layout from '../../app/[[...paths]]/layout'

describe(Layout.name, () => {
  test('isDefined', () => {
    const component = render(<Layout>Layout</Layout>)
    expect(component).toBeDefined()
  })
})
