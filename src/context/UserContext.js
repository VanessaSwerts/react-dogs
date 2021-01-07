import React, { useState, createContext } from 'react'
import { TOKEN_POST, USER_GET } from '../api/Api'


export const UserContext = createContext()

export function UserStorage({ children }) {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const [loding, setLoding] = useState(false)
  const [error, setError] = useState(false)

  const getUser = async (token) => {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    setData(json)
    setLogin(true)
  }

  const userLogin = async (username, password) => {
    const { url, options } = TOKEN_POST({ username, password })

    const tokenResp = await fetch(url, options)
    const { token } = await tokenResp.json()
    window.localStorage.setitem('token', token)
    getUser(token)
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  )
}

