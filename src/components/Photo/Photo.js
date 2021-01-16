import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { PHOTO_GET } from '../../api/Api'
import { Error, Loading, PhotoContent } from '../'

export default function Photo() {
  const { id } = useParams()
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    const { url, options } = PHOTO_GET(id)
    request(url, options)
  }, [request, id])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent data={data} single={true}/>
      </section>
    )
  else return null
}

