import React from 'react'
import { Image } from '../'
import styles from './FeedPhotosItem.module.css'

export default function FeedPhotosItem({ photo, setModalPhoto }) {
  return (
    <li className={styles.photo} onClick={() => setModalPhoto(photo)}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  )
}

