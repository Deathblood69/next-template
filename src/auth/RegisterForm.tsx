'use client'

import {Fragment, useActionState} from 'react'
import AppFormField from '@/components/AppFormField'
import AppSubmitButton from '@/components/AppSubmitButton'
import {register} from '@/auth/actions/register'

export function RegisterForm() {
  const [state, action] = useActionState(register, undefined)

  return (
    <Fragment>
      <h1>Register</h1>
      <form action={action}>
        <AppFormField
          id={'name'}
          label={'Name'}
          placeholder={'Username'}
          errors={state?.errors?.name}
        />
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
          label={'Sign Up'}
          type={'submit'}
        />
        <p>{state?.message}</p>
      </form>
    </Fragment>
  )
}
