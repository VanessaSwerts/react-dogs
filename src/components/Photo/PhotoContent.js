import React from 'react'
import { Link } from 'react-router-dom'
import { PhotoComents } from '../'
import styles from './PhotoContent.module.css'

export default function PhotoContent({ data }) {
  const { photo, coments } = data

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            <Link to={`/perfil/${photo.autor}`} >@{photo.author}</Link>
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
      <PhotoComents id={photo.id} coments={coments} />
    </div>
  )
}

