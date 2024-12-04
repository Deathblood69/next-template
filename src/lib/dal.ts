import 'server-only'

import {cache} from 'react'
import {cookies} from 'next/headers'
import {decrypt} from '@/lib/session'
import {redirect} from "next/navigation";


export const verifySession = cache(async () => {
    const cookieStore = await cookies()
    const cookie = cookieStore.get('session')?.value
    const session = await decrypt(cookie)

    if (!session?.userId) {
        redirect('/login')
    }

    return {isAuth: true, userId: session.userId, userRole: session.role}
})

export const getUser = cache(async (id: string) => {

    const session = await verifySession()
    if (!session) {
        return null
    }

    try {
        const query = `?userId=${id || session.userId}`
        const response = await fetch(`http://localhost:8080/users${query}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())

        return response.body
    } catch (error) {
        console.log('Failed to fetch user')
        return null
    }
})