import React from 'react';
import User from './User';;

const Users = ({users}) => {
    return (
        <ul className='users-container'>
            {
                users.map(user => (
                    <User key={user.id} userId={user.id} name={user.name} username={user.username}/>
                ))
            }
        </ul>
    )
}

export default Users;