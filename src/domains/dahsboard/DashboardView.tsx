import {getSession, verifySession} from '@/utils/session'
import {redirect} from 'next/navigation'
import AdminDashboard from '@/domains/dahsboard/AdminDashboard'
import UserDashboard from '@/domains/dahsboard/UserDashboard'

export default async function DashboardView() {
  const sessionExist = await verifySession()

  if (!sessionExist) {
    redirect('/login')
  }

  const session = await getSession()
  const userRole = session?.user?.role // Assuming 'role' is part of the session object

  if (userRole === 'admin') {
    return <AdminDashboard />
  } else if (userRole === 'user') {
    return <UserDashboard />
  } else {
    redirect('/login')
  }
}
