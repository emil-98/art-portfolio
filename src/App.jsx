import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Navbar/>

      <div name='content-holder' className='h-screen w-full flex absolute justify-center items-center font-sans-text z-0'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
      
    </>
  )
}

export default App
