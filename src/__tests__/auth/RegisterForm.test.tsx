import {describe, expect, test} from 'vitest'
import {render} from '@testing-library/react'
import {RegisterForm} from '@/auth/RegisterForm'

describe(RegisterForm.name, () => {
  test('isDefined', () => {
    const component = render(<RegisterForm />)
    expect(component).toBeDefined()
  })
})
