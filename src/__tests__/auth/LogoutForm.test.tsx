import {describe, expect, test} from 'vitest'
import {render} from '@testing-library/react'
import LogoutForm from '@/auth/LogoutForm'

describe(LogoutForm.name, () => {
  test('isDefined', () => {
    const component = render(<LogoutForm />)
    expect(component).toBeDefined()
  })
})
