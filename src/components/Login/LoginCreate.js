import React, { useContext } from 'react'
import { Input, Button, Error } from '../'
import useForm from '../../hooks/useForm'
import useFetch from '../../hooks/useFetch'
import { USER_POST } from '../../api/Api'
import { UserContext } from '../../context/UserContext'


export default function LoginCreate() {
  const username = useForm()
  const email = useForm('email')
  const password = useForm()
  const { loading, error, request } = useFetch()

  const { userLogin } = useContext(UserContext)

  const handleSignUp = async (event) => {
    event.preventDefault()
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    const { response } = await request(url, options)
    if (response.ok) userLogin(username.value, password.value)
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>

      <form onSubmit={handleSignUp}>
        <Input label="Usuário" type="text" id="username" {...username} />
        <Input label="E-mail" type="text" id="email" {...email} />
        <Input label="Senha" type="password" id="password" {...password} />
        {loading
          ? <Button disabled >Cadastrando...</Button>
          : <Button>Cadastrar</Button>
        }
        <Error error={error} />
      </form>
    </section>
  )
}