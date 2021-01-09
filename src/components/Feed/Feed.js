import React, { useState } from 'react'
import { FeedModal, FeedPhotos } from '../'

export default function Feed() {
  const [modalPhoto, setModalPhoto] = useState(null)

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  )
}

