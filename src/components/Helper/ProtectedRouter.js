import React, { useContext } from 'react'
import { Route, Navigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

export default function ProtectedRouter(props) {
  const { login } = useContext(UserContext)

  if (login === true) return <Route {...props} />
  else if (login === false) return <Navigate to='/login' />
  else return null
}