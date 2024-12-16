import {AppProps} from '@/types/AppProps'
import {PAGES} from '@/domains/pages'
import {notFound} from 'next/navigation'
import {Attributes, createElement} from 'react'
import MainLayout from '@/layouts/MainLayout'

export default async function Layout({children, params}: AppProps) {
  const promise = await params

  if (!promise?.paths || !params) {
    return <MainLayout>{children}</MainLayout>
  }

  const paths = promise.paths as string[]

  const path = `/${paths.join('/')}`

  const findedPage = PAGES.find((page) => page.path === path)

  if (!findedPage) {
    notFound()
  }

  return createElement(
    findedPage.layout,
    promise as Attributes & AppProps,
    children
  )
}
