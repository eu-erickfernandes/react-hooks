import { useUserContext } from "./utils/contexts/UserContext"

function App() {
  const { users } = useUserContext()

  return (
    <>
      <h1>Usuários</h1>

      <ul>
        {users.map((user) => (
          <li>{ user }</li>
        ))}
      </ul>
    </>
  )
}

export default App
