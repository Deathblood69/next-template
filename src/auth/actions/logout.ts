'use server'

import {deleteSession} from '@/utils/session'
import {redirect} from 'next/navigation'
import {Paths} from '@/constants/paths'
import {Messages} from '@/constants/messages'
import {Keys} from '@/constants/keys'

/**
 * Server action to log out the user and redirect to the login page.
 */
export async function logout(): Promise<{message: string}> {
  try {
    // 1. Delete user session
    await deleteSession()
  } catch (error) {
    // Log any errors
    console.error(error)

    // Return error message to ui
    return {
      [Keys.message]: Messages.logoutError
    }
  }

  // 2. Redirect to login page
  redirect(Paths.login)
}
