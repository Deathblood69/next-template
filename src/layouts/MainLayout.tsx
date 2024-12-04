import {Fragment, ReactNode} from 'react'
import Link from 'next/link'
import {Paths} from '@/constants/paths'

interface Props {
  children: ReactNode
}

export default async function MainLayout({children}: Props) {
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
        <button>
          <Link href={Paths.logout}>Logout</Link>
        </button>
      </ul>
    </Fragment>
  )
}
