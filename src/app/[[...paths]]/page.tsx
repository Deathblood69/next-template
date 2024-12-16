import {AppProps} from '@/types/AppProps'
import {PAGES} from '@/domains/pages'
import {notFound} from 'next/navigation'
import {Attributes, createElement} from 'react'
import HomeView from '@/domains/home/HomeView'

export default async function Page({params}: AppProps) {
  const promise = await params

  if (!promise?.paths || !params) {
    return <HomeView />
  }

  const paths = promise.paths as string[]

  const path = `/${paths.join('/')}`

  const findedPage = PAGES.find((page) => page.path === path)

  if (!findedPage) {
    notFound()
  }

  return createElement(findedPage.component, promise as Attributes & AppProps)
}
