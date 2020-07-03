import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './basic-rputer-styles.css';

function Users(){
    
    const [ users, setUsers ] = useState([])
    
    let { path, url } = useRouteMatch();
    
    useEffect(() => {
        async function fetchUsers(){
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const usersList = await res.json();
            setUsers(usersList);
        }
        fetchUsers()
    }, [])

    return (
        <div>
            <header>
                <h1>Users</h1>
            </header>
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>
                            <Link to={`${url}/my-posts/${user.id}`}>{user.name}</Link>
                        </li>
                    )) 
                }
            </ul>
        </div>
    )
}

export default Users;