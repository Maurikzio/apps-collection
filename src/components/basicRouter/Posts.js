import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './basic-rputer-styles.css';

function Posts(props){
    const [ posts, setPosts ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const userId = props.match.params.id;

    let history = useHistory();

    useEffect(() => {
        async function fetchPosts(){
            setLoading(true)
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            const data = await res.json();
            setPosts(data);
            setLoading(false);
        }
        fetchPosts();
    },[])

    function handleClick() {
        history.goBack();
      }

    if(loading){
        return (
            <div className='loading'>
                <p className='loading-text'>Loading....</p>
            </div>
        )
    }

    return(
        <div>
            <header>
                <h1>Posts</h1>
            </header>
            <button onClick={handleClick} className='to-back'>Go Back</button>
            <h1 className='post-header'>My id is: {userId}</h1>
            {
                posts.map(post => (
                    <div key={post.id} className='user-posts'>
                        <p className='post-title'>{post.title}</p>
                        <p className='post-body'>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Posts;