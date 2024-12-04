'use server'

import {RegisterFormState} from '@/auth/types/register/register.state'
import {hashSync} from 'bcrypt-ts'
import {validateFormService} from '@/composable/validateFormService'
import {updateObject} from '@/utils/updateObject'
import {Keys} from '@/constants/keys'
import {fetchService} from '@/composable/fetchService'
import {Api} from '@/constants/api'
import {Messages} from '@/constants/messages'
import {HttpMethods} from '@/constants/httpMethods'
import {UserSession} from '@/types/UserSession'
import {RegisterFormSchema} from '@/auth/types/register/register.schema'
import {createUrl} from '@/utils/createUrl'
import {CredentialsEntity} from '@/auth/types/credentials/credentials.entity'
import {redirect} from 'next/navigation'
import {Paths} from '@/constants/paths'
import {parseRegister} from '@/auth/types/register/parseRegister'
import {RegisterDefault} from '@/auth/types/register/register.entity'

/**
 * Server action to handle user registration
 * @param _state
 * @param formData
 */
export async function register(
  _state: RegisterFormState,
  formData: FormData
): Promise<RegisterFormState> {
  // 1. Parse user form data
  let user = parseRegister(formData, RegisterDefault)

  // 2. Validate form fields
  const formService = validateFormService(RegisterFormSchema, user)
  if (formService) {
    // Return error message to ui
    return updateObject(Keys.errors, formService.errors)
  }

  // 3. Hash the password to save it in the database
  if (!user.password) {
    return updateObject(Keys.message, Messages.failedParse)
  }

  const hashedPassword = hashSync(user.password, 10)
  user = {
    ...user,
    password: hashedPassword
  }

  try {
    // 4. Send user to database
    const url = createUrl<CredentialsEntity>(Api.users)
    await fetchService<UserSession>(url, {
      method: HttpMethods.POST,
      body: JSON.stringify(user)
    })
  } catch (error) {
    // Log any errors
    console.error(error)

    // Return error message to ui
    return updateObject(Keys.message, Messages.failedRegister)
  }

  // 6. Redirect to dashboard
  redirect(Paths.dashboard)
}
