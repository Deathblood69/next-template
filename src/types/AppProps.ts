import {ReactNode} from 'react'

export interface AppProps {
  children?: ReactNode
  params?: Promise<Record<string, string | string[]>>
}
