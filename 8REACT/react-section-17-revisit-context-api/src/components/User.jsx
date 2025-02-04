import React, { useContext } from 'react'
import {UserContext} from '../contexts/UserProvider';

const User = () => {

  const {users} = useContext(UserContext);
  console.log(users[0])
  const {email, gender, picture} = users[0];



  return (
    <div>
      <div>{email}</div>
      <div>{gender}</div>
      <div>
        <img src={picture.large} className='w-32 h-32 object-cover' alt="" />
      </div>
    </div>
  )
}

export default User