import React, { useEffect } from 'react'

const Home = () => {



    useEffect(() => {
            console.log('home component is created');
    
            return () => {
                console.log('home component is deleted');
            }
        })



  return (
    <div>Home</div>
  )
}

export default Home