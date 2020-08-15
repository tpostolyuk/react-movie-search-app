import React from 'react'
import s from './list.module.css'
import { useStore } from 'effector-react'
import { Movie } from '../../ui'
import { $movies } from './model'

export const List = () => {
  const movies = useStore($movies)
  const renderData = movies.map(item => <Movie key={item.imdbID} title={item.Title} year={item.Year} poster={item.Poster} />)
  return (
    <div className={s.list}>
      {renderData}
    </div>
  )
}
