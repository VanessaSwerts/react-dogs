import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button } from '../'
import useForm from '../../hooks/useForm'
import { UserContext } from '../../context/UserContext'


export default function LoginForm() {
  const username = useForm()
  const password = useForm()
  const { userLogin } = useContext(UserContext)

  const handleLogin = async (event) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
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