import {expect, test} from 'vitest'
import {render} from '@testing-library/react'
import RootLayout from '@/layouts/RootLayout'

test('Layout', () => {
  const component = render(<RootLayout>Layout</RootLayout>)
  expect(component).toBeDefined()
})
