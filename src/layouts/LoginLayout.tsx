import React, {Fragment, ReactNode} from 'react'

interface Props {
  children: ReactNode
}

export default function LoginLayout({children}: Props) {
  return <Fragment>{children}</Fragment>
}
