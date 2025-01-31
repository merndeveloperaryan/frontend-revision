import React from 'react'
import { RxCross2 } from "react-icons/rx";

const Card = ({cardData, removeItem, index}) => {

  const {name, price, src} = cardData;



  return (
    <div className='relative w-40 h-fit p-2 bg-zinc-100 rounded-xl'>
      <div className='w-full h-28 rounded-xl overflow-hidden'>
        <img className='w-full h-full object-cover' src={src} alt="" />
      </div>
      <div className='w-full p-1 flex justify-between items-center'>
        <h2 className='leading-none text-sm font-medium text-zinc-700'>{name}</h2>
        <h3 className='text-xs font-medium'>${price}</h3>
      </div>
      <button className='w-full p-2 bg-teal-600 rounded-xl mt-1 text-xs font-semibold'>Add to Card</button>
      <span onClick={() => removeItem(index)} className='absolute w-6 h-6 flex justify-center items-center rounded-full
       top-2 right-2 hover:bg-zinc-100 transition-all duration-500'>
        <RxCross2 />
      </span>
    </div>
  )
}

export default Card