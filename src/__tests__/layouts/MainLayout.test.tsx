import {expect, test} from 'vitest'
import {render} from '@testing-library/react'
import MainLayout from '@/layouts/MainLayout'

test('Layout', () => {
  const component = render(<MainLayout>Layout</MainLayout>)
  expect(component).toBeDefined()
})
