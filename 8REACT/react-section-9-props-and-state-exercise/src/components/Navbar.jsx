import React, { useState } from 'react'

const Navbar = ({songs}) => {


  return (
    <div className='w-full p-5 flex justify-between items-center mb-5'> 
      <h2 className='text-2xl font-bold text-orange-500'>Song PlayList</h2>
      <div className="w-fit px-3 py-2 rounded-full bg-orange-400 text-xs flex justify-between items-center gap-2">Favourites<span className='text-white font-semibold'>{songs.filter(item => item.isAdded).length}</span></div>
    </div>
  )
}

export default Navbar