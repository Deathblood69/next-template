import {describe, expect, test} from 'vitest'
import {render} from '@testing-library/react'
import UserDashboard from '@/domains/dahsboard/UserDashboard'

describe(UserDashboard.name, () => {
  test('isDefined', () => {
    const component = render(<UserDashboard />)
    expect(component).toBeDefined()
  })
})
