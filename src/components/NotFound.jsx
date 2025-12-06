import { Link } from 'react-router'
import { Menu } from './Menu'

export function NotFound () {
  return (
    <>
      <Menu />

      <main>
        <section>
          <h1>404</h1>
          <p>La página que buscas no está disponible en este momento.</p>
          <Link to='/'>Ir a inicio</Link>
        </section>
      </main>
    </>
  )
}
