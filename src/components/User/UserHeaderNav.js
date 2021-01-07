import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import styles from './UserHeaderNav.module.css'

//Icones
import { ReactComponent as MinhasFotos } from '../../assets/feed.svg'
import { ReactComponent as Estatisticas } from '../../assets/estatisticas.svg'
import { ReactComponent as AdicionarFotos } from '../../assets/adicionar.svg'
import { ReactComponent as Sair } from '../../assets/sair.svg'

export default function UserHeaderNav() {
  const [mobile, setMobile] = useState(null)
  const { userLogout } = useContext(UserContext)

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end activeClassName={styles.active}>
        <MinhasFotos />
        {mobile && 'Minhas Fotos'}
      </NavLink>

      <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
        <Estatisticas />
        {mobile && 'Estatísticas'}
      </NavLink>

      <NavLink to="/conta/postar"activeClassName={styles.active}>
        <AdicionarFotos />
        {mobile && 'Adicionar Fotos'}
      </NavLink>

      <button onClick={userLogout}>
        <Sair />
        {mobile && 'Sair'}
      </button>
    </nav>
  )
}

