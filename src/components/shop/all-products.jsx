import React, { Component } from "react";
import http from "../../services/httpService";
import { apiUrl } from "../../config.json";
import { Link } from "react-router-dom";

class AllProducts extends Component {
   state = {
    shops: [],
    products:[],
  }; 

  async componentDidMount(){
    const products= [];
    const { data } = await http.get(`${apiUrl}/shop/my-products`);
    data.forEach(shop => {
      shop['shop_products'].forEach(product=>{
        products.push(product);
      })
    });
    this.setState({products});
  } 


  render() {
     const { products } = this.state;
    return (
       <div className="container">
         <h1>this is my products</h1>
          

        <div className="row">
          <div className="col-12">
              <p>Manage Your products in the list below...</p>
            </div>
            <span className="ml-auto">
             {/*  <Link to="/my-shop/add-new-shop" className="text-success">
                <i className="fas fa-plus-circle mr-2"></i>Add Shop
              </Link> */}
            </span>
            <div className="col-12">
              <ul>
               {products.map(product=>{
                return (
                <li key={product['id']}>{product['product_title']}
                <p className="card-text border-top pt-2">
                  <Link to={`/my-shop/edit-product/${product.id}`}>Edit</Link> |
                  <Link className="ml-2" to={`/my-shop/delete-product/${product.id}`}>
                    Delete
                  </Link>
                  </p>
                </li>
                )})} 
              </ul>
              
            </div>
          </div> 
      </div> 
    );
  }
}

export default AllProducts;
