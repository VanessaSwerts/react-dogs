import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { LoginForm, LoginCreate, LoginPasswordLost, LoginPasswordReset } from '../'
import { UserContext } from '../../context/UserContext'
import styles from './Login.module.css';

export default function Login() {
  const { login } = React.useContext(UserContext)

  if (login === true) return <Navigate to="/conta" />
  return (
    <section className={styles.login} >
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  )
}