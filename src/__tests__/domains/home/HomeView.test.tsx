import {describe, expect, test} from 'vitest'
import {render} from '@testing-library/react'
import HomeView from '@/domains/home/HomeView'

describe(HomeView.name, () => {
  test('isDefined', () => {
    const component = render(<HomeView />)
    expect(component).toBeDefined()
  })
})
