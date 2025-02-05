import { IJoke } from '../types/jokes/jokes.types'

const baseUrl: string = 'https://api.chucknorris.io/jokes'

export const chucknorrisApi = {
  async getRandomJokes(): Promise<IJoke> {
    const res = await fetch(`${baseUrl}/random`)
    return res.json()
  }
}