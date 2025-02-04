import React from 'react'
import Nav from './components/NaV.JSX'
import Routing from './helpers/Routing'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-yellow-200 bg-blend-soft-light'>
      
      <Nav />
      <Routing />
    </div>
  )
}

export default App