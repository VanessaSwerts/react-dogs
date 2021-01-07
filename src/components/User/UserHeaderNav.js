import React, { useState, useEffect, useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import useMedia from '../../hooks/useMedia'
import { UserContext } from '../../context/UserContext'
import styles from './UserHeaderNav.module.css'

//Icones
import { ReactComponent as MinhasFotos } from '../../assets/feed.svg'
import { ReactComponent as Estatisticas } from '../../assets/estatisticas.svg'
import { ReactComponent as AdicionarFotos } from '../../assets/adicionar.svg'
import { ReactComponent as Sair } from '../../assets/sair.svg'

export default function UserHeaderNav() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const { userLogout } = useContext(UserContext)
  const mobile = useMedia('(max-width: 40rem)')
  const { pathname } = useLocation()

  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])


  return (
    <>
      { mobile &&
        <button
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end activeClassName={styles.active}>
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>

        <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>

        <NavLink to="/conta/postar" activeClassName={styles.active}>
          <AdicionarFotos />
          {mobile && 'Adicionar Fotos'}
        </NavLink>

        <button onClick={userLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

