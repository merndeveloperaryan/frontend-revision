import React from 'react'
import { decrement, increment, incrementByAmount } from './reducers/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {

  const { value } = useSelector(state => state.counterReducers);
  const dispatch = useDispatch();





  return (
    <div>
      <div className='w-1/2 text-center mx-auto p-10 text-red-600'>counter {value}</div>
      <div className='w-full p-10 flex justify-center gap-10 items-center'>
        <button className='px-5 py-3 rounded-lg bg-transparent text-red-600 border border-red-600 cursor-pointer' onClick={() => dispatch(increment())}>increment</button>
        <button className='px-5 py-3 rounded-lg bg-transparent text-red-600 border border-red-600 cursor-pointer' onClick={() => dispatch(decrement())}>decrement</button>
        <button className='px-5 py-3 rounded-lg bg-transparent text-red-600 border border-red-600 cursor-pointer' onClick={() => dispatch(incrementByAmount(5))}>increment By amount 5</button>
      </div>
    </div>
  )
}

export default App