import {Fragment, ReactNode} from 'react'

interface Props {
  children: ReactNode
}

export default function BaseLayout({children}: Props) {
  return <Fragment>{children}</Fragment>
}
