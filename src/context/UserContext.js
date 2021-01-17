import React, { useState, useEffect, useCallback, createContext } from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api/Api'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

export function UserStorage({ children, history }) {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const getUser = async (token) => {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    setData(json)
    setLogin(true)
  }

  const userLogin = async (username, password) => {
    try {
      const { url, options } = TOKEN_POST({ username, password })
      const tokenRes = await fetch(url, options)
      if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`)
      const { token } = await tokenRes.json()
      window.localStorage.setItem('token', token)
      await getUser(token)
      navigate('/conta')
    } catch (err) {
      setError(err.message)
      setLogin(false)
    }
    finally {
      setLoading(false)
    }
  }

  const userLogout = useCallback(async () => {
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(false)

    window.localStorage.removeItem('token')
    navigate('/login')
  }, [navigate])

  const autoLogin = useCallback(async () => {
    const token = window.localStorage.getItem('token')
    if (token) {
      try {
        setError(null)
        setLoading(true)
        const { url, options } = TOKEN_VALIDATE_POST(token)
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Token inválido')
        await getUser(token)
        navigate('/conta')
      } catch (err) {
        userLogout()
      } finally {
        setLoading(false)
      }
    } else {
      setLogin(false)
    }
  }, [navigate, userLogout])

  useEffect(() => {
    autoLogin()
  }, [userLogout, autoLogin
  ])

  return (
    <UserContext.Provider value={{ userLogin, userLogout, data, error, loading, login }}>
      {children}
    </UserContext.Provider>
  )
}

