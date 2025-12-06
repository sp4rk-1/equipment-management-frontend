import { createBrowserRouter } from 'react-router'
import App from '../App'
import { Home } from '../components/Home'
import { HistoryPage } from '../components/HistoryPage'
import { UsersPage } from '../components/UsersPage'
import { EquipmentPage } from '../components/EquipmentPage'
import { NotFound } from '../components/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    ErrorBoundary: NotFound,
    children: [
      { index: true, Component: Home },
      { path: 'history', Component: HistoryPage },
      { path: 'users', Component: UsersPage },
      { path: 'equipment', Component: EquipmentPage },
    ]
  },
])
