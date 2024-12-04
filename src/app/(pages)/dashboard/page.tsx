import {verifySession} from '@/lib/dal'
import {redirect} from "next/navigation";
import UserDashboard from "@/domains/dahsboard/UserDashboard";
import AdminDashboard from "@/domains/dahsboard/AdminDashboard";

export default async function Page() {
    const session = await verifySession()
    const userRole = session?.userRole // Assuming 'role' is part of the session object

    if (userRole === 'admin') {
        return <AdminDashboard/>
    } else if (userRole === 'user') {
        return <UserDashboard/>
    } else {
        redirect('/login')
    }
}