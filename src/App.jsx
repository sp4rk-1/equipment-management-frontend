import './App.css'
import { Menu } from './components/Menu'
import { Outlet } from 'react-router'

function App () {
  return (
    <>
      <Menu />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
