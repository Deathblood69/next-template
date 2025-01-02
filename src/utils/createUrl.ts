import {Api} from '@/constants/api'

export function createUrl<T>(api: Api, params?: Partial<T>) {
  const base = 'http://localhost:8080/'
  const url = new URL(`${base}${api}`)
  if (params) {
    Object.keys(params).forEach((key) => {
      // @ts-expect-error Inférence de type
      url.searchParams.append(key, params[key])
    })
  }
  return url
}
