import React, {Fragment} from 'react'
import {AppProps} from '@/types/AppProps'

export default function NoLayout({children}: AppProps) {
  return <Fragment>{children}</Fragment>
}
