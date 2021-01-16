import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserHeader, UserPhotoPost, UserStats, Feed } from '../'
import { UserContext } from '../../context/UserContext'

export default function User() {
  const { data } = useContext(UserContext)

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  )
}

