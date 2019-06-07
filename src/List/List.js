import React, { Component } from 'react';
import Product from '../Components/Product/Product'

export default class List extends Component {
    render(){
        const mappedProducts = this.props.products.map(product => {
            return(
                <Product
                key={product.id}
                product={product}
                deleteProduct={this.props.deleteProduct}
                setEditing={this.props.setEditing}
                id={product.id}
                />

            )
        })
        return <div className="list-container">{mappedProducts}</div>;
    }

}