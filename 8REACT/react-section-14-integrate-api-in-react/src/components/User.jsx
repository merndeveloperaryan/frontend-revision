import React, { useEffect, useState } from 'react'

const User = () => {


    const [first, setFirst] = useState('hellow ')


    useEffect(() => {
        console.log('user component is created');

        return () => {
            console.log('user component is deleted');
        }
    })


  return (
    <div>
        <h2>{first}</h2>
        <button onClick={() => setFirst('hello everyone')}>change</button>
    </div>
  )
}

export default User