'use server'

import {createSession, updateSession, verifySession} from '@/utils/session'
import {redirect} from 'next/navigation'
import {parseFormData} from '@/utils/parseFormData'
import {validateFormService} from '@/composable/validateFormService'
import {fetchService} from '@/composable/fetchService'
import {Messages} from '@/constants/messages'
import {Keys} from '@/constants/keys'
import {updateObject} from '@/utils/updateObject'
import {Api} from '@/constants/api'
import {createUrl} from '@/utils/createUrl'
import {Paths} from '@/constants/paths'
import {UserSession} from '@/types/UserSession'
import {CredentialsEntity} from '@/auth/types/credentials/credentials.entity'
import {CredentialFormState} from '@/auth/types/credentials/credentials.state'
import {CredentialsFormSchema} from '@/auth/types/credentials/credentials.schema'

/**
 * Server action to handle user login
 * @param _state - Contains ui messages and errors
 * @param formData - Contains email and password
 */
export async function login(
  _state: CredentialFormState,
  formData: FormData
): Promise<CredentialFormState> {
  // 1. Parse user form data
  const user = parseFormData<CredentialsEntity>(formData)
  if (!user) {
    // Return error message to ui
    return updateObject(Keys.message, Messages.failedParse)
  }

  // 2. Validate form fields
  const formService = validateFormService(CredentialsFormSchema, user)
  if (formService) {
    // Return error message to ui
    return updateObject(Keys.errors, formService.errors)
  }

  // 3. Get user by email from database
  const url = createUrl<CredentialsEntity>(Api.users, {email: user.email})
  const connectedUser = await fetchService<UserSession>(url)
  if (!connectedUser) {
    // Return error message to ui
    return updateObject(Keys.message, Messages.failedLogin)
  }

  // 4. Create or update user session
  const jwtPayload = await verifySession()
  const sessionFunction = jwtPayload ? updateSession : createSession
  await sessionFunction({id: connectedUser.id, role: connectedUser.role})

  // 5. Redirect to dashboard
  redirect(Paths.dashboard)
}
