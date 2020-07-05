import React from 'react';
import { theProducts } from './seed';
import Product from './Product';

import './products-list-styles.css';

class ProductsList extends React.Component {
    state = {
        products: []
    }

    componentDidMount(){
        this.setState({
            products: theProducts
        })
    }

    handleOnUpVote = (productId) => {
        // alert('voted: ' + productId)
        const nextProducts = this.state.products.map( product => {
            if(product.id === productId){
                return Object.assign({}, product, {votes: product.votes+1})
            }else{
                return product
            }
        });
        this.setState({
            products: nextProducts
        })
    } 

    render(){
        // console.log(this.state);
        const sortedProducts = this.state.products.sort((a, b) => b.votes - a.votes);
        const productsToShow = sortedProducts.map( product => (
            <Product
                key={'product-'+product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onUpVote={this.handleOnUpVote}
            />
        ))

        return (
            <div>
                <header>
                    <h1>Voting App</h1>
                </header>
                <div className='products-list'>
                    <h2 className='subtitle'>Popular products</h2>
                    { productsToShow }
                </div>
            </div>
        )
    }
}

export default ProductsList;