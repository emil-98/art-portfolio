import React from 'react'
import ImageBox from './ImageBox'

const Gallery = () => {
  return (
    <div>
      <div 
        name="img-grid"
        className='grid p-4 sm:grid-cols-2 grid-cols-4'
      >
        <ImageBox imgSrc='../assets/logo'/>
      </div>
    </div>
  )
}

export default Gallery