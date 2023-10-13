import React, {useEffect, useState} from 'react'
import ImageBox from './ImageBox'
import axios from 'axios'

const Gallery = () => {
  const [data, setData] = useState([{}]);

  const getImages = () => {
    
  }

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log("message is " + data.message)
      })
  }, [])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-fit w-fit justify-items-center items-center gap-[25px]'>
      <h1>{!data ? "Loading..." : data.message}</h1>
    </div>
  )
}

export default Gallery