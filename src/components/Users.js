import React from 'react';
import UserList from './UserList';

const dummyData = [
    {id: '1', name: 'Maria',  image: 'https://avatars.dicebear.com/v2/avataaars/3fa197ba4a56aee8c78217c03c9b7a02.svg', camps: 1},
    {id: '2', name: 'Natalia', image: 'https://avatars.dicebear.com/v2/avataaars/192fcaf94bcd4c172df26c8b58a60084.svg', camps: 2},
    {id: '3', name: 'Jose', image: 'https://avatars.dicebear.com/v2/avataaars/98b7ba1060b2175ad3020a97b76bdb89.svg', camps: 3}
]

const Users = () => {
    return (
        <UserList users={dummyData}/> 
    )
}

export default Users; 