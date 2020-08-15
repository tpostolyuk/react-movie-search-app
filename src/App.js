import React from 'react'
import s from './App.module.css'
import { Header } from './ui'
import { Search, List } from './features'

export function App() {
  return (
    <div className={s.app}>
      <Header title='Movie app'/>
      <Search />
      <List />
    </div>
  );
}
