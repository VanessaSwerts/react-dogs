import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Button, Error } from '../'
import { PHOTO_POST } from '../../api/Api'
import useForm from '../../hooks/useForm'
import useFetch from '../../hooks/useFetch'

import styles from './UserPhotoPost.module.css'


export default function UserPhotoPost() {
  const nome = useForm()
  const peso = useForm('number')
  const idade = useForm('number')
  const [img, setImg] = useState({})
  const { data, error, loading, request } = useFetch()
  const navigate = useNavigate()

  const handlePostPhoto = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('img', img.raw)
    formData.append('nome', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)

    const token = window.localStorage.getItem('token')
    const { url, options } = PHOTO_POST(formData, token)
    request(url, options)
  }

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0]
    })
  }

  useEffect(() => {
    if (data) navigate('/conta')
  }, [data, navigate])

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handlePostPhoto}>
        <Input label="Nome" type="text" id="nome" {...nome} />
        <Input label="Peso" type="number" id="peso" {...peso} />
        <Input label="Idade" type="number" id="idade" {...idade} />
        <input className={styles.file} type="file" id="img" name="img" onChange={handleImgChange} />
        {loading
          ? <Button disabled >Enviando...</Button>
          : <Button>Enviar</Button>
        }
        <Error error={error} />
      </form>

      <div>
        {img.preview
          &&
          (<div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}>

          </div>
          )}
      </div>
    </section>
  )
}

