import React from 'react';

import './product-styles.css';

const Product = (props) => {

    const upVote = () => {
        props.onUpVote(props.id)
    }

    return(
        <div className='product-wrapper'>
            <div className='product-image'>
                <img src= {require(`${props.productImageUrl}`)}/>
            </div>
            <div className='product-content'>
                <div className='product-header'>
                    <a onClick={upVote}>▲</a>
                    {props.votes}
                </div>
                <div className='product-description'>
                    <a href={props.url}>{props.title}</a>
                    <p>{props.description}</p>
                </div>
                <div className='product-extra'>
                    <span>Submitted by:</span>
                    <img src= {require(`${props.submitterAvatarUrl}`)}/>
                </div>

            </div>
        </div>
    )
}

export default Product;