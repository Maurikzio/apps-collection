import React from 'react';

const Tags = ({list, removeQ}) => {

    return(
        <div className='tags-container'>
            {
                list.map((tag, i) => (
                    <p key={i} className='tag'>{tag}<span className='close-tag' onClick={() => removeQ(tag)}>X</span></p>
                ))
            }
        </div>
    )
}

export default Tags;