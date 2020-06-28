import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pagination-styless.css';
import Users from './Users';
import Posts from './Posts'

const Pagination = () => {
    const [ users, setUsers] = useState([]);
    const [ loading, setLoading ] = useState(false);


    //make the request
    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/users/');
            setUsers(res.data)
            setLoading(false);
        }
        fetchUsers()
    },[])


    return (
        <div>
            <header>
                <h1>Smart Posts</h1>
            </header>
            {/* <Users users={users}/> */}
            <Posts/>
        </div>
    )
}

export default Pagination;