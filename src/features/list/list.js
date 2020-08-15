import React from 'react'
import s from './list.module.css'
import { useStore } from 'effector-react'
import { Movie, Preloader } from '../../ui'
import { $movies } from './model'
import { $isPending, $errorMessage } from './model'

export const List = () => {
  const movies = useStore($movies)
  const isPending = useStore($isPending)
  const errorMessage = useStore($errorMessage)

  const renderData = movies.map(item => <Movie key={item.imdbID} title={item.Title} year={item.Year} poster={item.Poster} />)
  return (
    <div className={s.list}>
      {isPending ? <Preloader /> : renderData}
      <div style={{ marginTop: 30, fontFamily: 'Arial' }}>
        <h1>{errorMessage}</h1>
      </div>
    </div>
  )
}
