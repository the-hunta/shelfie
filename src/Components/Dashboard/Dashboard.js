import React from 'react'
import Header from '../Header/Header';
import Form from '../ Form/Form'
import List from '../../List/List'
import axios from 'axios'


class Dashboard extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            products: [],
            editing: false,
            currentProduct: {}
        };
    }

    componentDidMoint() {
        axios.get('api/products').then(res=> {
            console.log(res.data);
            this.setState({
                products: res.dta
            })
        })
    }

    createProduct = product => {
        axios.post('.api/product', product).then(res => {
            console.log(res.data);
            this.setState({
                products: res.send
            })
        })
    }

    deleteProduct = id => {
        axios.delete(`/api/coin/${id}`).then(res => {
            console.log(res.data);
            this.setState({
                products: res.data
            })
        })
    }

    setEditing = id => {
        let product = this.state.products.find(product => product.id === id);

        this.setState({
            editing: true,
            currentProduct: product
        })
    }

    updateProduct = (id, product) => {
        axios.put(`api/product/${id}`, product).then(res => {
            console.log(res.data);
            this.setState({
                products: res.data,
                currentProduct: {},
                editing: false
            })
        })
    }

    render(){
        const{ products, currentProduct, editing } = this.state;
        console.log(currentProduct);
        return(
            <div className="dashboard">
                <Header/>

                <div className="container">
                    <div className="mian-form">
                        <Form
                        createProduct={this.createProduct}
                        currentProduct={currentProduct}
                        editing={editing}
                        updateProduct={this.updateProduct}
                        />
                    </div>
                    <div className="main-list">
                        <List
                        products={products}
                        deleteProduct={this.deleteProduct}
                        setEditing={this.setEditing}
            
                        />
                    </div>
                </div>
            </div>
    
        )
    }
}


export default Dashboard;