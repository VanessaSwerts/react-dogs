import React, { lazy, useEffect, Suspense } from 'react'
import useFetch from '../../hooks/useFetch'
import { STATS_GET } from '../../api/Api'
import { Error, Loading } from '../'

const UserStatsGraphs = lazy(() => import('./UserStatsGraphs'))

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
      <Suspense fallback={<div></div>}>
        <UserStatsGraphs data={data} />
      </Suspense>
    )
  else
    return null
}

