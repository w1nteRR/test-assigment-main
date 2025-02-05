import { Jokes } from './components/jokes/jokes'
import { JokesProvider } from './providers/jokes.provider'

import './App.css'

function App() {
  return (
    <JokesProvider>
      <Jokes />
    </JokesProvider>
  )
}

export default App
