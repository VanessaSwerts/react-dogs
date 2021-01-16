import React, { useState } from 'react'
import { ReactComponent as Enviar } from '../../assets/enviar.svg'
import useFetch from '../../hooks/useFetch'
import { COMMENT_POST } from '../../api/Api'
import { Error } from '../'
import styles from './PhotoCommentsForm.module.css'


export default function PhotoCommentsForm({ id, setComments, single }) {
  const [comment, setComment] = useState('')
  const { error, request } = useFetch()

  const handleAddComment = async (e) => {
    e.preventDefault()
    const { url, options } = COMMENT_POST(id, { comment })
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setComments((comments) => [...comments, json])
    }
  }

  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleAddComment}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente ..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      {error && <Error error={error} />}
    </form>
  )
}

