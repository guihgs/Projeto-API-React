import React, { Component } from 'react';
//import api axios
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
    //React Stado da aplicacao
    state = {
        products: [],
    }
    
    //React LyfeCicle
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        //acessar api
        const response = await api.get('/products');

        //mostrar resultado da busca da api
        console.log(response.data.dots);
        
        //Setar state incluir os dados no state
        this.setState({ products: response.data.docs })
    }

    render(){
    const { products } = this.state;

    return (
        <div className="product-list">
            {products.map(product => (
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                
                <a href="#">Acessar</a>
                </article>
            ))}      

        <h2>Contagem de produtos: {this.state.products.length}</h2>
        </div>
    )    
    }
}