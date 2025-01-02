import {AppProps} from '@/types/AppProps'
import RootLayout from '@/layouts/RootLayout'

export default function Layout({children}: AppProps) {
  return <RootLayout>{children}</RootLayout>
}
