import React, { Component } from 'react'

export default class Form extends Component{
    constructor(props){
        super(props);

        this.state = {
            name:'',
            price: 0,
            image: ''
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentProduct.name !== this.props.currentProduct.name) {
            this.setState({
                image: this.props.currentProduct.image,
                price: this.props.currentProduct.price,
                name: this.props.currentProduct.name
            })
        }
    }


    handleChange = e => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    createProduct = e => {
        e.preventDefault();

        const { image, name, price } = this.State;
        let newProduct = {
            image,
            price,
            name
        };

        this.props.createProduct(newProduct);

        this.setState({
            image: '',
            price: 0, 
            name: ''
        })
    }

    updateProduct = e => {
        e.preventDefault();
        const { id } = this.props.currentProduct;
        const { name, price, image } = this.state
        let updProduct = {
            image,
            price,
            name
        }

        this.props.updateProduct(id, updProduct);

        this.setState({
            image: '',
            price: 0,
            name: '',
        })
    }


    render(){
        const { image, price, name } = this.state;
        const { editing } = this.props;
        return(
            <div classname="from-container"> 
            <form className="form"
                onSubmit={editing ? this.updateProduct : this.createProduct}
                >
                
                <h1>New product</h1>
                <input
                    name="image"
                    type="text"
                    placeholder="Product Image"
                    onChange={this.handleChange}
                    value={image}
                    />
                <input
                    name="price"
                    type="number"
                    placeholder="Product Price"
                    onChange={this.handleChange}
                    value={price}
                    />
                <input
                    name="name"
                    type="text"
                    placeholder="Product Name"
                    onChange={this.handleChange}
                    value={name}
                    />

                {editing ? (
                    <button>Update Product</button>
                ) : (
                    <button>Create Product</button>
                )}
                 </form> 
            </div>
        )
    }
}


