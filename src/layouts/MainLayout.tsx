import {Fragment} from 'react'
import Link from 'next/link'
import {Paths} from '@/constants/paths'
import {verifySession} from '@/utils/session/verifySession'
import {AppProps} from '@/types/AppProps'

export default async function MainLayout({children}: AppProps) {
  const connected = await verifySession()

  return (
    <Fragment>
      {children}
      <ul>
        <button>
          <Link href={Paths.home}>Home</Link>
        </button>
        <button>
          <Link href={Paths.profile}>Profile</Link>
        </button>
        {connected ? (
          <button>
            <Link href={Paths.logout}>Logout</Link>
          </button>
        ) : (
          <button>
            <Link href={Paths.login}>Login</Link>
          </button>
        )}
      </ul>
    </Fragment>
  )
}
