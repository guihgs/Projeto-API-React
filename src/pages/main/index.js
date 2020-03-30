import React, { Component } from 'react';
//import api axios
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Main extends Component {
    //React Stado da aplicacao
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }
    
    //React LyfeCicle
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        //acessar api"
        const response = await api.get('/products?page=${page}');

        //Guardar informacoes da api
        const { docs, ...productInfo } = response.data;

        //mostrar resultado da busca da api
        //console.log(response.data.dots);
        
        //Setar state incluir os dados no state
        this.setState({ products: docs, productInfo, page });
    };

    //Paginação Arrow functions
    prevPage = () => {
        const { page, productInfo } = this.state;
        if (page === 1) return;

        const pageNumber = page -1;

        this.loadProducts(pageNumber);
    }
    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    render(){
    const { products } = this.state;

    return (
        <div className="product-list">
            {products.map(product => (
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                
                <Link to='/products/${product._id}'>Acessar</Link>
                </article>
            ))}      

        <h2>Contagem de produtos: {this.state.products.length}</h2>
        <div className="actions">
            <button  onClick={this.prevPage}>Anterior</button>
            <button onClick={this.nextPage}>Próximo</button>
        </div>
        </div>
    )    
    }
}