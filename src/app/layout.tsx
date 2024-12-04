import {ReactNode} from 'react'
import RootLayout from '@/layouts/RootLayout'

interface Props {
  children: ReactNode
}

export default function Layout({children}: Props) {
  return <RootLayout>{children}</RootLayout>
}
