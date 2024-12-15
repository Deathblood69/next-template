import {describe, expect, test} from 'vitest'
import {render} from '@testing-library/react'
import LoginForm from '@/auth/LoginForm'

describe(LoginForm.name, () => {
  test('isDefined', () => {
    const component = render(<LoginForm />)
    expect(component).toBeDefined()
  })
})
