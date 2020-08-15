import React from 'react'
import s from './search.module.css'
import { TextField, Button } from '@material-ui/core'
import { useStore } from 'effector-react'
import { setSearchedValue, $searchedValue } from './model';
import { getMovies, clearMovies } from '../list/model';

export const Search = () => {
  const searchedValue = useStore($searchedValue)

  const handleSearch = () => getMovies(searchedValue)

  const handleChange = (e) => setSearchedValue(e.target.value)

  const handleClear = () => clearMovies()


  return (
    <div className={s.wrapper}>
      <section className={s.search}>
        <TextField value={searchedValue} onChange={handleChange} variant="outlined" label="Enter film" />
        <Button variant="outlined" color="primary" onClick={handleSearch}>Search</Button>
        <Button variant="outlined" color="secondary" onClick={handleClear}>Clear</Button>
      </section>
    </div>
  )
}
