import React from 'react';

const Tags = ({list, qs, setQs}) => {

    const handleCloseTag = (tagName) => {
        setQs(
            qs.filter(tag => !tag.tags.includes(tagName))
        )
    }

    return(
        <div className='tags-container'>
            {
                list.map((tag, i) => (
                    <p key={i} className='tag'>{tag}<span className='close-tag' onClick={() => handleCloseTag(tag)}>X</span></p>
                ))
            }
        </div>
    )
}

export default Tags;