import { useQuery } from '@tanstack/react-query'
import { chucknorrisApi } from '../../api/chucknorris.api.js'
import { QueryKeys } from '../../types/utils/query.types.js'

export const useRandomJokeQuery = () => {
  return useQuery({
    queryKey: [QueryKeys.Jokes],
    queryFn: chucknorrisApi.getRandomJokes,
    refetchOnWindowFocus: false,
  })
}
