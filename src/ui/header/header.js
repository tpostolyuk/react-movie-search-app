import React from 'react'
import s from './header.module.css'

export const Header = ({ title }) => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>{title}</h1>
    </header>
  )
}