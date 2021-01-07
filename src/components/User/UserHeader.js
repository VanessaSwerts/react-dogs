import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { UserHeaderNav } from '../'
import styles from './UserHeader.module.css'

export default function UserHeader() {
  const [title, setTitle] = useState('')
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/conta')
      setTitle('Minha Conta')
    else if (location.pathname === '/conta/estatisticas')
      setTitle('Estatísticas')
    else if (location.pathname === '/conta/postar')
      setTitle('Poste Sua foto')
  }, [location])

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>

      <UserHeaderNav />
    </header>
  )
}

