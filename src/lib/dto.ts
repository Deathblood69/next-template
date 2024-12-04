import 'server-only'
import {getUser} from '@/lib/dal'
import {User} from "@/types/User";

function canSeeUsername(viewer: User) {
    return true
}

function canSeePhoneNumber(viewer: User, team: string) {
    return viewer.role === 'admin' || team === viewer.team
}

// TODO: A appeler sur /profile
export async function getProfileDTO(id: string) {

    const currentUser = await getUser(id)


    // Or return only what's specific to the query here
    if (currentUser) {

        const username = canSeeUsername(currentUser) ? currentUser.username : null
        const phoneNumber = canSeePhoneNumber(currentUser, currentUser.team)
            ? currentUser.phonenumber
            : null

        return {
            username,
            phoneNumber: phoneNumber
        }
    }
}