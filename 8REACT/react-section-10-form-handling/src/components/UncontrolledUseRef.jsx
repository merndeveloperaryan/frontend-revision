import React, { useEffect, useRef } from 'react'

const UncontrolledUseRef = () => {

  const name = useRef();
  const password = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username is : ${name.current.value} and password is : ${password.current.value}`)
    
  }

  useEffect(()=> {
    name.current.focus();
  } , []);



  return (
    <form action='' onSubmit={handleSubmit} className='w-1/4 h-1/2 rounded-xl border-2  flex justify-center items-center flex-col gap-4'>
      <div>
        
        <input ref={name} className='w-[90%] border-2 p-2 ml-2 rounded ' type="text" id='name' placeholder='Enter you name' name='name' />
      </div>
      <div>
        
        <input ref={password} className='w-[90%] border-2 p-2 ml-2 rounded my-2' type="password" id='password' placeholder='Enter you password' name='password' />
      </div>
      
      <button type='submit' className='px-3 py-2 rounded bg-blue-600 text-xs text-white'>Submit</button>
    </form>
  )
}

export default UncontrolledUseRef