import React, {useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './PostList';
import Pages from './Pages.js';

const Posts = () => {
    const [ posts, setPosts] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ postsPerPage, setPostsPerPage ] = useState(10);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            // const res = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
            setPosts(res.data)
        }
        fetchPosts()
    }, [])

    //get current post
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <div>
            <PostList posts={currentPosts}/>
            <Pages postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>
    )
}

export default Posts;