import React from 'react'
import { UseFetch } from './components/UseFetch'
import { UseAxios } from './components/UseAxios'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'

const App = () => {

  




  return (
    <div className='w-full h-screen bg-zinc-300'>
      <nav className='w-full p-5 flex justify-center items-center gap-10'>
        <Link to='/'>Home</Link>
        <Link to='/user'>User</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
      </Routes>
      {/* <UseFetch /> */}
      {/* <UseAxios /> */}

    </div>
  )
}

export default App