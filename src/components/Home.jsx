import React, {useEffect, useState} from 'react'

const Home = () => {

  const [profileImg, setProfileImg] = useState(null);

  useEffect(() => {
    fetch("/api/selfpics")
      .then((res) => res.json())
      .then((data) => {
        setProfileImg(data.url)
        console.log("message is " + data.url)
      })
  }, [])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-fit w-fit justify-items-center items-center gap-[25px]'>
      <img 
        src={!profileImg ? "../src/assets/img_icon.svg" : profileImg} 
        className='object-cover object-top rounded-2xl w-[400px] h-[400px] shadow-[0_0_15px_rgba(0,0,0,0.5)] ' 
      />
      <p className='max-w-[400px] h-fit text-justify'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  )
}

export default Home