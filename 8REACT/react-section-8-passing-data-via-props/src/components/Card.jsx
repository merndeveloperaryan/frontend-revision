import React from 'react'

const Card = ({obj, index, handleFrindship}) => {

    const {name, profession, src, isFollow} = obj;

    


  return (
    <div className='w-52 p-2 rounded-xl bg-zinc-200 text-black'>
        <div className='w-full h-44 rounded-xl overflow-hidden bg-blue-300'>
            <img src={src} className='w-full h-full object-cover object-top' alt="" />
        </div>
        <div className='p-1'>
            <h1 className='text-xl font-semibold'>{name}</h1>
            <h2 className='text-xs text-zinc-500'>{profession}</h2>
            <button onClick={() => handleFrindship(index)} className={`border-2 border-black text-black px-3 py-2 mt-2 rounded-xl ${isFollow ? 'bg-transparent' : 'bg-blue-500'} text-xs font-semibold`}>{isFollow ? 'UnFollow' : 'Follow'}</button>
        </div>
    </div>
  )
}

export default Card