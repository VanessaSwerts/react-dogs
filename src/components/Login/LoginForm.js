import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Input, Button} from '../'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
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

  return (
    <section>
      <h1>Login</h1>

      <form action="" onSubmit={handleLogin}>
        <Input label="Usuário" id='username' type="text" value={username} onChange={({ target }) => setUsername(target.value)} />
        <Input label="Senha"  id='password' type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
        <Button>Entrar</Button>
      </form>

      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}