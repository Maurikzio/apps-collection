import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pagination-styless.css';
import Pages from './Pages.js';
import Posts from './Posts';

const Pagination = () => {
    const [ posts, setPosts] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ postsPerPage, setPostsPerPage ] = useState(10);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchPosts = async () => {
        setLoading(true)
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // const res = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
        setPosts(res.data)
        setLoading(false);
    }
    fetchPosts()
  }, [])

  //get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)


    return (
        <div>
            <header>
                <h1>Smart Posts</h1>
            </header>
            <Posts posts={currentPosts} loading={loading}/>
            <Pages postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>
    )
}

export default Pagination;