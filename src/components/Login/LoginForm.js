import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { Input, Button, Error } from '../'
import useForm from '../../hooks/useForm'
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'

export default function LoginForm() {
  const username = useForm()
  const password = useForm()
  const { userLogin, error, loading } = useContext(UserContext)

  const handleLogin = async (event) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className="title">Login</h1>

      <form className={styles.form} onSubmit={handleLogin}>
        <Input label="Usuário" id='username' type="text" {...username} />
        <Input label="Senha" id='password' type="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
            <Button>Entrar</Button>
          )}
        <Error error={error} />
      </form>

      <Link className={styles.lostPassword} to="/login/perdeu">Perdeu a senha?</Link>

      <div className={styles.signUp}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
      </div>

    </section>
  )
}