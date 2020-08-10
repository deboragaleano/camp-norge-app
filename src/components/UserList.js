import React from 'react';
import User from './User';

const UserList = (props) => {
  const user = props.users.map(user => (
    <User user={user}/>
  ))

  return ( 
    {user}
  )
}

export default UserList; 