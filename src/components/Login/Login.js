import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import {LoginForm, LoginCreate, LoginPasswordLost, LoginPasswordReset} from '../'
import { UserContext } from '../../context/UserContext'


export default function Login() {
  const { login } = React.useContext(UserContext)

  if (login === true) return <Navigate to="/conta" />
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  )
}