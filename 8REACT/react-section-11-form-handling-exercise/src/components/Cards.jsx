import React from 'react'
import Card from './Card';

const Cards = ({data, removeItem}) => {
  return (
    <div className='px-10 py-5 w-full h-[75%] flex gap-6 overflow-y-auto flex-wrap'>
        {data.map((item, ind) => (
            <Card cardData={item} index={ind} key={ind} removeItem={removeItem} />
        ))}
    </div>
  )
}

export default Cards