import React from 'react'

const Card = () => {
  return (
    <div className='w-52 px-2 py-2 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md'> 
        <div className='w-full h-32 rounded-md bg-zinc-300 overflow-hidden'>
          <img src="https://plus.unsplash.com/premium_photo-1661423616067-abfd050798a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9uJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" className='w-full h-full bg-cover' alt="" />
        </div>
        <div className='w-full p-2'>
           <h2 className='font-semibold mb-2'>Amazon Product</h2>
           <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente rem quod tempore, dolores deleniti vero.</p>
        </div>
    </div>
  )
}

export default Card