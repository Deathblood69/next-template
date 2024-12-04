import React, {ReactNode} from 'react'
import BaseLayout from '@/layouts/BaseLayout'

interface Props {
  children: ReactNode
}

export default function Layout({children}: Props) {
  return <BaseLayout>{children}</BaseLayout>
}
