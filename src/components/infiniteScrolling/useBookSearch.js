import { useState, useEffect } from 'react';
import axios from 'axios';

const useBookSearch = (query, pageNumber) => {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ books, setBooks ] = useState([]);
    const [ hasMore, setHasMore ] = useState(false);

    useEffect(() => {
        setBooks([]);
    }, [query])

    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel 
        axios({
            method: 'GET',
            url: 'http://openlibrary.org/search.json',
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken((c) => cancel = c) //to cancel while we write into the input
        }).then(res => {
            // console.log(res.data.docs)
            setBooks(prevBooks => { //to dont overwrite the book list but to use the previous books too
                return [...new Set([...prevBooks, ...res.data.docs.map(b => {
                    return b.title
                })])];
            })
            setHasMore(res.data.docs.length > 0);
            setLoading(false)
        }).catch(error => {
            if(axios.isCancel(error)) return;
            setError(true);
        }) 
        return () => cancel()
    }, [query, pageNumber])

    return { loading, error, books, hasMore }
}

export default useBookSearch;