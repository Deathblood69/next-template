import {getProfileDTO} from "@/lib/dto";

export default function Page() {

    const profile = getProfileDTO('1')

    return (
        <h1>Profile</h1>
    )
}