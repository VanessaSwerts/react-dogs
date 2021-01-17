import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { STATS_GET } from '../../api/Api'
import { Error, Loading, UserStatsGraphs } from '../'

export default function UserStats() {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET()
      await request(url, options)
    }

    getData()
  }, [request])


  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <div>
        <UserStatsGraphs data={data} />
      </div>
    )
  else
    return null
}

