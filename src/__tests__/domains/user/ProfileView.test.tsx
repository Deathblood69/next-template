import {describe, expect, test} from 'vitest'
import {render} from '@testing-library/react'
import ProfileView from '@/domains/user/ProfileView'

describe(ProfileView.name, () => {
  test('isDefined', () => {
    const component = render(<ProfileView />)
    expect(component).toBeDefined()
  })
})
