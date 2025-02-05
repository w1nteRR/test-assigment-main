import { useContext } from 'react'
import { JokesContext } from '../../providers/jokes.provider'

export const useJokesStore = () => {
  const context = useContext(JokesContext)

  if (!context) {
    throw new Error('useJokesStore must be used within a JokesProvider')
  }

  return context
}
