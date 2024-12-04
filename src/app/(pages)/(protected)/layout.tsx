import React, {ReactNode} from 'react'
import MainLayout from '@/layouts/MainLayout'

interface Props {
  children: ReactNode
}

export default function Layout({children}: Props) {
  return <MainLayout>{children}</MainLayout>
}
