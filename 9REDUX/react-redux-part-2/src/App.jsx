import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementAsync } from './reducers/scoreSlice';

const App = () => {

  const { score } = useSelector(state => state.score);
  const dispatch = useDispatch();





  return (
    <div className='w-full p-10 flex justify-center items-center gap-10'>
      <div className='w-20 p-3 border border-red-400 text-red-600 rounded'>score: {score}</div>
      <button onClick={() => dispatch(incrementAsync(5))} className='px-5 py-3 border border-red-400 text-red-600 rounded'>Increment</button>
    </div>
  )
};

export default App