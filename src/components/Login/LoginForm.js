import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button } from '../'
import useForm from '../../hooks/useForm'
import { TOKEN_POST, USER_GET } from '../../api/Api'


export default function LoginForm() {
  const username = useForm()
  const password = useForm()

  const getUser = async (token) => {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST(
        {
          username: username.value,
          password: password.value
        })

      const response = await fetch(url, options)
      const json = await response.json()
      window.localStorage.setitem('token', json.token)
      getUser(json.token)
    }
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token)
      getUser(token)
  }, [])

  return (
    <section>
      <h1>Login</h1>

      <form action="" onSubmit={handleLogin}>
        <Input label="Usuário" id='username' type="text" {...username} />
        <Input label="Senha" id='password' type="password" {...password} />
        <Button>Entrar</Button>
      </form>

      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}