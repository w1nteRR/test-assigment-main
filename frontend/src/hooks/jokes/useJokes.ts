import { useMutation } from '@tanstack/react-query'

import { useRandomJokeQuery } from './useRandomJokeQuery'
import { useJokesStore } from './useJokesStore'

import { INotificationPayload } from '../../types/notifications/notification.types'
import { IJoke } from '../../types/jokes/jokes.types'

import { botApi } from '../../api/bot.api'

export const useJokes = () => {
  const jokeQuery = useRandomJokeQuery()
  const { set, store } = useJokesStore()

  const mutation = useMutation({
    mutationFn: (notification: INotificationPayload) =>
      botApi.sendNotification(notification),
  })

  const sendJokeToTeams = async () => {
    if (!jokeQuery.data) return

    if (store.size) {
      const jokesAsString = Array.from(store.values())
        .map((joke) => joke.value)
        .join(' | ')

      await mutation.mutateAsync({ text: jokesAsString })

      return
    }

    await mutation.mutateAsync({ text: jokeQuery.data.value })
  }

  const getRandomJoke = async () => jokeQuery.refetch()

  const saveJokeToStateStore = async (joke: IJoke) => {
    set(joke.id, joke)

    getRandomJoke()
  }

  return {
    sendJokeToTeams,
    getRandomJoke,
    saveJokeToStateStore,
    jokeQuery,
  }
}
