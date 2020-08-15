import { createEvent, createStore } from 'effector'
import { clearMovies } from '../../list/model'

export const setSearchedValue = createEvent()

export const $searchedValue = createStore('')
  .on(setSearchedValue, (_, payload) => payload)
  .on(clearMovies, () => '')