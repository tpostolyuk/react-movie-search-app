import { createStore, createEffect, createEvent } from 'effector'
import axios from 'axios'

export const getMovies = createEffect({
  async handler(searchedValue) {
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchedValue}&apikey=e8694326`)
    return response
  }
})

export const clearMovies = createEvent()

export const $isPending = getMovies.pending

export const $errorMessage = createStore('')
  .on(getMovies.doneData, (_, payload) => {
    if (payload.data.Error.length) {
      return payload.data.Error
    }
  })
  .on(clearMovies, () => '')


export const $movies = createStore([])
  .on(getMovies.doneData, (_, payload ) =>  payload.data.Search)
  .on(clearMovies, () => [])

