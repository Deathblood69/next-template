import {describe, expect, test} from 'vitest'
import {render} from '@testing-library/react'
import AdminDashboard from '@/domains/dahsboard/AdminDashboard'

describe(AdminDashboard.name, () => {
  test('isDefined', () => {
    const component = render(<AdminDashboard />)
    expect(component).toBeDefined()
  })
})
