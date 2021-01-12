import React, { useContext, useEffect, useState, useRef } from 'react'
import { UserContext } from "../../context/UserContext"
import { PhotoCommentsForm } from '..'
import styles from './PhotoComments.module.css'

export default function PhotoComments(props) {
  const { login } = useContext(UserContext)
  const commentsSection = useRef(null)
  const [comments, setComments] = useState(props.comments)

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments])

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map(comment =>
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>)}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  )
}

