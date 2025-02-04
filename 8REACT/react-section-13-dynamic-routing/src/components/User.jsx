import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div className='w-1/2 mx-auto'>
      <h2 className='w-full text-center text-2xl font-semibold text-yellow-600 underline'>User</h2>
      <p className='w-full text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa aut veniam dignissimos magni cumque accusantium est at id porro molestias molestiae praesentium exercitationem rem sed, libero inventore magnam iste. At sint deleniti nihil cupiditate pariatur hic animi dicta numquam  cumque, asperiores facilis nulla consequuntur. Rerum provident asperiores deserunt necessitatibus suscipit commodi accusantium tempora dolor, optio ratione exercitationem fugiat minima tempore cum laudantium? Quia </p>
      <div className='w-full p-5 flex flex-col'>
        <Link className='w-56 p-3 rounded-lg bg-red-300 my-1' to='/user/aryan'>Aryan</Link>
        <Link className='w-56 p-3 rounded-lg bg-red-300 my-1' to='/user/sonam'>Sonam</Link>
        <Link className='w-56 p-3 rounded-lg bg-red-300 my-1' to='/user/pappu'>pappu</Link>
        <Link className='w-56 p-3 rounded-lg bg-red-300 my-1' to='/user/bablu'>Bablu</Link>
        <Link className='w-56 p-3 rounded-lg bg-red-300 my-1' to='/user/katariya'>Katariya</Link>
        <Link className='w-56 p-3 rounded-lg bg-red-300 my-1' to='/user/pritam'>Pritam</Link>
      </div>
      <button className='px-3 py-2 rounded-lg bg-yellow-600 text-white mt-5'>Know More</button>
    </div>
  )
}

export default User