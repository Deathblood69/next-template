import {describe, expect, test} from 'vitest'
import {render} from '@testing-library/react'
import DashboardView from '@/domains/dahsboard/DashboardView'

describe(DashboardView.name, () => {
  test('isDefined', () => {
    const component = render(<DashboardView />)
    expect(component).toBeDefined()
  })
})
