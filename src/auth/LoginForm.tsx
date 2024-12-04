'use client'

import {Fragment, useActionState} from 'react'
import AppFormField from '@/components/AppFormField'
import AppSubmitButton from '@/components/AppSubmitButton'
import {login} from '@/auth/actions/login'
import Link from 'next/link'
import {Paths} from '@/constants/paths'

export default function LoginForm() {
  const [state, action] = useActionState(login, undefined)

  return (
    <Fragment>
      <h1>Login</h1>
      <form action={action}>
        <AppFormField
          id={'email'}
          label={'Email'}
          placeholder={'Email'}
          type={'email'}
          errors={state?.errors?.email}
        />
        <AppFormField
          id={'password'}
          label={'Password'}
          placeholder={'Password'}
          type={'password'}
          errors={state?.errors?.password}
        />
        <AppSubmitButton
          label={'Connect'}
          type={'submit'}
        />
        <p>{state?.message}</p>
      </form>
      <button type={'button'}>
        <Link href={Paths.register}>Register</Link>
      </button>
    </Fragment>
  )
}
