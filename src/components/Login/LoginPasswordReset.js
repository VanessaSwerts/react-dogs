import React, { useState, useEffect } from 'react'
import { Input, Button, Error } from '../'
import useFetch from '../../hooks/useFetch'
import useForm from '../../hooks/useForm'
import { PASSWORD_RESET } from '../../api/Api'
import { useNavigate } from 'react-router-dom'

export default function LoginPasswordReset() {
  const [login, setLogin] = useState('')
  const [key, setKey] = useState('')
  const password = useForm()
  const { loading, error, request } = useFetch()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('key')

    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })
      const { response } = await request(url, options)
      if (response.ok) navigate("/login")
    }
  }

  return (
    <div>
      <h1 className="title">Nova senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" id="password" {...password} />
        {loading
          ? <Button disabled>salvando ...</Button>
          : <Button>Salvar Senha</Button>
        }
        {error && <Error error={error} />}
      </form>
    </div>
  )
}