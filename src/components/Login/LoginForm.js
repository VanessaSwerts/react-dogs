import React from 'react'
import { Link } from 'react-router-dom'
import { Input, Button } from '../'
import useForm from '../../hooks/useForm'

export default function LoginForm() {
  const username = useForm()
  const password = useForm()

  const handleLogin = (event) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      }).then(response => {
        console.log(response)
        return response.json()
      }).then(json => {
        console.log(json)
      })
    }
  }

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