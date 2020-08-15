import { createStore, createEffect, createEvent } from 'effector'
import axios from 'axios'

export const getMovies = createEffect({
  async handler(searchedValue) {
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchedValue}&apikey=e8694326`)
    return response.data
  }
})

export const clearMovies = createEvent()

export const $movies = createStore([])
  .on(getMovies.doneData, (_, payload ) =>  payload.Search)
  .on(clearMovies, () => [])

