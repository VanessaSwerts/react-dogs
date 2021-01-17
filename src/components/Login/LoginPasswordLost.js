import React from 'react'
import { Input, Button, Error } from '../'
import useFetch from '../../hooks/useFetch'
import useForm from '../../hooks/useForm'
import { PASSWORD_LOST } from '../../api/Api'

export default function LoginPasswordLost() {
  const login = useForm()
  const { data, loading, error, request } = useFetch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu, resetar')
      })
      await request(url, options)
    }
  }


  return (
    <section className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      {data
        ? (
          <p style={{ color: '#4c1' }}>{data}</p>
        )
        : (
          <form onSubmit={handleSubmit}>
            <Input label="E-mail / Usuário" type="text" id="email" {...login} />
            {loading
              ? <Button disabled>Enviando ...</Button>
              : <Button>Enviar E-mail</Button>
            }
            {error && <Error error={error} />}
          </form>
        )}
    </section>
  )
}