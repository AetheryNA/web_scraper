import { Link, useRoutes } from 'react-router-dom'
import routes from './routes'

function App() {
  const appRoutes = useRoutes(routes)

  return (
    <main className="App">
      {appRoutes}
    </main>
  )
}

export default App
