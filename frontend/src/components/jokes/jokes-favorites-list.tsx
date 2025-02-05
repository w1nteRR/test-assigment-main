import { useJokesStore } from '../../hooks/jokes/useJokesStore'

export const JokesFavoritesList = () => {
  const { store } = useJokesStore()

  if (!store.size) return null

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl text-start">Favorites</h2>

      <div className="bg-neutral-900 p-8 rounded-md">
        <ul className="list-disc pl-4">
          {Array.from(store.values()).map((joke) => (
            <li className="mb-2 text-start" key={joke.id}>
              <span>{joke.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
