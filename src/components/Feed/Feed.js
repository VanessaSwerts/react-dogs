import React, { useState, useEffect } from 'react'
import { FeedModal, FeedPhotos } from '../'

export default function Feed({ user }) {
  const [modalPhoto, setModalPhoto] = useState(null)
  const [pages, setPages] = useState([1])
  const [infinite, setInfinite] = useState(true)

  useEffect(() => {
    function infiniteScroll(event) {
      if (infinite) {
        let wait = false
        const scroll = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight

        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1])
          wait = true
          setTimeout(() => { wait = false }, 500)
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)

    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [infinite])

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      { pages.map(page => <FeedPhotos key={page} page={page} user={user} setModalPhoto={setModalPhoto} setInfinite={setInfinite} />)}
    </div>
  )
}

