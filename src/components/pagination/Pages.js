import React from 'react';

const Pages = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }
    
    return (
        <div className='pages-container'>
            <ul>
                {
                    pageNumbers.map(number => (
                        <li key={number} onClick={() => paginate(number)}>
                            <a  href='#'>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pages;