import {Paths} from '@/constants/paths'
import {ReactNode} from 'react'
import {AppProps} from '@/types/AppProps'

export interface AppPage {
  path: Paths
  component: () => ReactNode
  layout: ({children}: AppProps) => ReactNode
}
