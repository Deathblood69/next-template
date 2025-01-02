import {AppPage} from '@/types/AppPage'
import HomeView from '@/domains/home/HomeView'
import MainLayout from '@/layouts/MainLayout'
import {Paths} from '@/constants/paths'
import LoginForm from '@/auth/LoginForm'
import NoLayout from '@/layouts/NoLayout'
import {RegisterForm} from '@/auth/RegisterForm'
import LogoutForm from '@/auth/LogoutForm'
import DashboardView from '@/domains/dahsboard/DashboardView'
import ProfileView from '@/domains/user/ProfileView'

export const PAGES: AppPage[] = [
  {
    path: Paths.home,
    component: HomeView,
    layout: MainLayout
  },
  {
    path: Paths.login,
    component: LoginForm,
    layout: NoLayout
  },
  {
    path: Paths.register,
    component: RegisterForm,
    layout: NoLayout
  },
  {
    path: Paths.logout,
    component: LogoutForm,
    layout: NoLayout
  },
  {
    path: Paths.dashboard,
    component: DashboardView,
    layout: MainLayout
  },
  {
    path: Paths.profile,
    component: ProfileView,
    layout: MainLayout
  }
]
