import React, { useEffect } from 'react'
import { FeedPhotosItem, Error, Loading } from '../'
import useFetch from '../../hooks/useFetch'
import { PHOTOS_GET } from '../../api/Api'
import styles from './FeedPhotos.module.css'

export default function FeedPhotos() {
  const { data, loading, error, request } = useFetch()


  async function fetchPhotos() {
    const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 })
    const { response, json } = await request(url, options)
    console.log(json)
  }

  useEffect(() => {
    fetchPhotos()
  }, [request])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} />)}
      </ul>
    )
  else return null
}

