import React from 'react'

const ImageBox = ({imgSrc, title, description}) => {
  return (
    <div className={`bg-[image:url(${imgSrc})]`}>
      <h2>
        {title}
      </h2>
      <p>
        {description}
      </p>
    </div>
  )
}

export default ImageBox