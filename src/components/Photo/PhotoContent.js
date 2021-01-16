import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PhotoComments, PhotoDelete, Image } from '../'
import { UserContext } from '../../context/UserContext'
import styles from './PhotoContent.module.css'

export default function PhotoContent({ data, single }) {
  const { photo, comments } = data
  const user = useContext(UserContext)

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author
              ? <PhotoDelete id={photo.id} />
              : <Link to={`/perfil/${photo.autor}`} >@{photo.author}</Link>
            }
            <span className={styles.views}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`} >{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} single={single} comments={comments} />
    </div>
  )
}

