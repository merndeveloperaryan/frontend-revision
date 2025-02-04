import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full p-5 bg-yellow-300 flex justify-center items-center gap-8 text-lg font-medium'> 
        <NavLink className='text-red-600 font-black' to='/'>Home</NavLink>
        <NavLink to='/user'>User</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/help'>Help</NavLink>
    </div>
  )
}

export default Nav