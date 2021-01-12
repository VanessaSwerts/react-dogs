import React from 'react'
import useFetch from '../../hooks/useFetch'
import { PHOTO_DELETE } from '../../api/Api'
import styles from './PhotoDelete.module.css'

export default function PhotoDelete({ id }) {
  const { loading, request } = useFetch()


  const handleDeletePhoto = async () => {
    const confirm = window.confirm('Tem certeza que deseja deletar?')
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id)
      const { response } = await request(url, options)
      if (response.ok) {
        window.location.reload()
      }
    }
  }

  return (
    <>
      {
        loading 
        ? <button className={styles.delete} disabled>Deletando...</button>
          : <button
            className={styles.delete}
            onClick={handleDeletePhoto}
          >
            Deletar
      </button>
      }

    </>
  )
}

