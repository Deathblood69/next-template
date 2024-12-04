import React, {ReactNode} from 'react'
import LoginLayout from '@/layouts/LoginLayout'

interface Props {
  children: ReactNode
}

export default function Layout({children}: Props) {
  return <LoginLayout>{children}</LoginLayout>
}
