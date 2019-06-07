import React from 'react'

export default function Product(props){
    const { name, image, price, id } = props.coin;
    return(
        <div className="product">
            <div className="product-details">
            <img src={image} alt={name}/>
            <p>{name}</p>
            <p>price: ${price}</p>
            </div>

            <div className="product-buttons">
                <button onClick={() => props.setEditing(id)}>

                    <i className="far fa-edit"/>
                </button>

                <button
                    onClick={() => props.deleteProduct(id)}>

                        <i className="far fa-times"/>
                </button>
            </div>
        </div>

    )
}