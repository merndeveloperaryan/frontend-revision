import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full p-5 flex justify-center items-center gap-10 text-emerald-600 font-semibold text-xl bg-zinc-200'>
        <Link className='hover:underline' to='/'>Home</Link>
        <Link className='hover:underline' to='/users'>Users</Link>
        <Link className='hover:underline' to='/products'>Products</Link>
        <Link className='hover:underline' to='/carts'>Carts</Link>
    </div>
  )
}

export default Nav