import React, {useState, useRef, useCallback } from 'react';
import useBookSearch from './useBookSearch';

import './infinite-scrolling-styles.css';
import Spinner from './Spinner';

export default function InfiniteScrolling () {
    const [ query, setQuery ] = useState('');
    const [ pageNumber, setPageNumber ] = useState(1);
    
    const { books, loading, error, hasMore } = useBookSearch(query, pageNumber);

    const observer = useRef();
    const lastBookElementRef = useCallback(node => {
        if(loading) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore) {
                // console.log('visible') --> just is console loged when we reach the very las element
                setPageNumber(prevPageNumer => prevPageNumer + 1)
            }
        })
        if(node) observer.current.observe(node)
    }, [loading, hasMore])

    function handleSearch(e){
        setQuery(e.target.value)
        setPageNumber(1);
    }

    return(
        <div className='books-finder-container'>
            <header>
                <h1>Book</h1>
            </header>

            <input
                value={query}
                type='text'
                onChange={handleSearch}
                placeholder='Enter a book name'
            />
            {
                books.map((book, index) => {
                    if(books.length === index + 1){
                        return <div ref={lastBookElementRef} key={book} className='book'> {book} </div>  
                    }else {
                        return <div key={book} className='book'> {book} </div>
                    }
                })
            }
            <div className='loading-container'>{loading && <Spinner/>} </div>
            <div>{error && 'Error...'}</div>
        </div>
    )
}