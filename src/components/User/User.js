import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserHeader, UserPhotoPost, UserStats, Feed } from '../'

export default  function User() {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="postar" element={<UserPhotoPost />} />
          <Route path="estatisticas" element={<UserStats />} />
        </Routes> 
    </section>
  )
}

