'use client'

import {Fragment, useActionState} from 'react'
import AppSubmitButton from '@/components/AppSubmitButton'
import {logout} from '@/auth/actions/logout'

export default function LogoutForm() {
  const [state, action] = useActionState(logout, undefined)

  return (
    <Fragment>
      <form action={action}>
        <AppSubmitButton
          label={'Confirm Logout'}
          type={'submit'}
        />
        <p>{state?.message}</p>
      </form>
    </Fragment>
  )
}
