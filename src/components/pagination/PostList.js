import React from 'react';

const PostList = ({posts, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }

    return (
        <ul className='posts-container'>
            {
                posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>
    )
}

export default PostList;