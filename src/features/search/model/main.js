import { createEvent, createStore } from 'effector'

export const setSearchedValue = createEvent()

export const $searchedValue = createStore('')
  .on(setSearchedValue, (_, payload) => payload)