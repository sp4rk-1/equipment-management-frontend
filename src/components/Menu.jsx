import { NavLink } from 'react-router'

function MenuItem ({ text, path }) {
  return (
    <li>
      <NavLink
        to={path}
      >
        {text}
      </NavLink>
    </li>
  )
}

export function Menu () {
  return (
    <header>
      <nav className='menu'>
        <ul>
          <MenuItem text='Prestamo de equipo CADI' path='/' />
          <MenuItem text='Nuevo usuario' path='/new-student' />
          <MenuItem text='Historial' path='/history' />
          <MenuItem text='Usuarios' path='/users' />
          <MenuItem text='Equipo' path='/equipment' />
        </ul>
      </nav>
    </header>
  )
}
