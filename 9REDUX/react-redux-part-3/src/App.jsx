import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from './store/reducers/userReducer';

const App = () => {


  const { users } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  return (
    <div className='w-full h-screen p-10 '>
      <h2 className='text-3xl font-semibold text-center my-5'>Users Details</h2>
      <ul>
        {users.map((user, ind) => (
          <div key={user.id} className='w-full flex justify-between items-center px-40'>
            <li className='text-red-500 text-sm my-1'>{user.username}</li>
            <span onClick={() => dispatch(deleteUser(ind))} className='text-red-500 text-sm cursor-pointer'>X</span>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default App