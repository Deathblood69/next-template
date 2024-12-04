import {HttpMethods} from '@/constants/httpMethods'

export async function fetchService<T>(url: URL, options?: RequestInit) {
  const connectedUser = await fetch(url, {
    method: HttpMethods.GET,
    headers: {
      'Content-Type': 'application/json'
    },
    ...options
  })
    .then(async (response) => {
      try {
        const getElements = await response.json()
        return getElements[0] as T satisfies T
      } catch (e) {
        console.error(e)
      }
    })
    .catch((reason) => console.error(reason))

  // Handle API response errors
  if (!connectedUser) {
    return undefined
  }

  return connectedUser
}
