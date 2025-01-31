import React from 'react'
import { useForm } from 'react-hook-form'

const ReactHookForm = () => {

  const {register, handleSubmit} = useForm();


  return (
    <form onSubmit={handleSubmit(data => console.log(data))} action='' className='w-1/4 h-1/2 rounded-xl border-2  flex justify-center items-center flex-col gap-4'>
      <div>
        
        <input {...register('name')} className='w-[90%] border-2 p-2 ml-2 rounded ' type="text" placeholder='Enter you name' />
      </div>
      <div>
        
        <input {...register('pass')} className='w-[90%] border-2 p-2 ml-2 rounded my-2' type="password" id='password' placeholder='Enter you password' />
      </div>
      
      <button type='submit' className='px-3 py-2 rounded bg-blue-600 text-xs text-white'>Submit</button>
    </form>
  )
}

export default ReactHookForm