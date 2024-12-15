import {describe, expect, test} from 'vitest'
import {render} from '@testing-library/react'
import Layout from '../../app/layout'

describe(Layout.name, () => {
  test('isDefined', () => {
    const component = render(<Layout>Layout</Layout>)
    expect(component).toBeDefined()
  })
})
