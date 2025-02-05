import { ReactNode, useState, createContext } from 'react'
import { IJoke } from '../types/jokes/jokes.types'

interface JokesContextType {
  store: Map<string, IJoke>
  set: (key: string, value: IJoke) => void
  del: (key: string) => void
  getAllJokesAsString: () => string
}

export const JokesContext = createContext<JokesContextType>(
  {} as JokesContextType
)

export const JokesProvider = ({ children }: { children: ReactNode }) => {
  const [store, setStore] = useState<Map<string, IJoke>>(new Map())

  const set = (key: string, value: IJoke) => {
    setStore((prev) => new Map(prev).set(key, value))
  }

  const del = (key: string) => {
    setStore((prev) => {
      const newStore = new Map(prev)
      newStore.delete(key)
      return newStore
    })
  }

  const getAllJokesAsString = () =>
    Array.from(store.values())
      .map((joke) => joke.value)
      .join(' | ')

  return (
    <JokesContext.Provider value={{ store, set, del, getAllJokesAsString }}>
      {children}
    </JokesContext.Provider>
  )
}
