import {expect, test} from 'vitest'
import {render} from '@testing-library/react'
import BaseLayout from '@/layouts/BaseLayout'

test('Layout', () => {
  const component = render(<BaseLayout>Layout</BaseLayout>)
  expect(component).toBeDefined()
})
