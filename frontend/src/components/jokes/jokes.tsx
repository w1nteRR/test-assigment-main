import { FC } from 'react'

import { JokesFavoritesList } from './jokes-favorites-list'
import { JokeCard } from './joke.card'

import { useJokes } from '../../hooks/jokes/useJokes'
import { useJokesStore } from '../../hooks/jokes/useJokesStore'

export const Jokes: FC = () => {
  const { jokeQuery, getRandomJoke, sendJokeToTeams, saveJokeToStateStore } =
    useJokes()
  const { store } = useJokesStore()

  return (
    <div style={{ maxWidth: 620 }}>
      <JokesFavoritesList />

      <div className="card">
        {jokeQuery.isFetching ? (
          <p>fetching...</p>
        ) : (
          <JokeCard
            value={jokeQuery.data?.value}
            onFavButtonClick={() =>
              jokeQuery.data && saveJokeToStateStore(jokeQuery.data)
            }
          />
        )}

        <div className="mt-2">
          <div className="flex gap-2">
            <button className="bg-neutral-900" onClick={getRandomJoke}>
              Get a Quote
            </button>
            <button
              className="bg-neutral-900"
              disabled={jokeQuery.isFetching}
              onClick={sendJokeToTeams}
            >
              Send to Teams {!!store.size && `(${store.size})`}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
