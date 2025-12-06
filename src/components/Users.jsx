function ListOfUsers ({ users }) {

}

function NoUsersResults () {
  return <p>No hay usuarios registrados</p>
}

export function Users ({ users }) {
  const hasUsers = users.length > 0

  return (
    hasUsers
      ? <p>Usuarios</p>
      : <NoUsersResults />
  )
}
