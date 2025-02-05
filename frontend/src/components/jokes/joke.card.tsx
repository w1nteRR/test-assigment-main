import { FC } from 'react'
import { IJoke } from '../../types/jokes/jokes.types'

interface IJokeCardProps extends Partial<IJoke> {
  onFavButtonClick: () => void
}

export const JokeCard: FC<IJokeCardProps> = ({ value, onFavButtonClick }) => {
  return (
    <div className="flex bg-neutral-900 p-8 rounded-md justify-between">
      <p>{value}</p>

      <button
        className="bg-white text-black h-fit ml-1"
        onClick={onFavButtonClick}
      >
        Save
      </button>
    </div>
  )
}
