import React, { useContext, useState } from 'react'
import { UserContext } from "../../context/UserContext"
import { PhotoCommentsForm } from '..'
import styles from './PhotoComments.module.css'

export default function PhotoComments(props) {
  const { login } = useContext(UserContext)
  const [comments, setComments] = useState(props.comments)

  return (
    <>
      <ul className={styles.comment}>
        {comments.map(comment =>
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>)}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
    </>
  )
}

