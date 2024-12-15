import {expect, test} from 'vitest'
import {render} from '@testing-library/react'
import LoginLayout from '@/layouts/LoginLayout'

test('Layout', () => {
  const component = render(<LoginLayout>Layout</LoginLayout>)
  expect(component).toBeDefined()
})
