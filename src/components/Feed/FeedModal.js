import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { PHOTO_GET } from '../../api/Api'
import { Error, Loading, PhotoContent } from '../'
import styles from './FeedModal.module.css'

export default function FeedModal({ photo, setModalPhoto }) {
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTO_GET(photo.id)
      await request(url, options)
    }

    fetchPhotos()
  }, [photo, request])

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget)
      setModalPhoto(null)
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}

