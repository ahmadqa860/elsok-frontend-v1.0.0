import React, { Component } from "react";
import http from "../../services/httpService";
import { apiUrl } from "../../config.json";
import { Link } from "react-router-dom";

class AllShops extends Component {
   state = {
    shops: [],
  }; 

  async componentDidMount(){
    const { data } = await http.get(`${apiUrl}/shop/my-shop`);
    if(data.length>0) this.setState({shops:data});
    console.log(this.state.shops);
  }

  render() {
     const { shops } = this.state;
    return (
       <div className="container">
        <div className="row">
          <div className="col-12">
              <p>Manage Your Shops in the list below...</p>
            </div>
            <span className="ml-auto">
              <Link to="/my-shop/add-new-shop" className="text-success">
                <i className="fas fa-plus-circle mr-2"></i>Add Shop
              </Link>
            </span>
            <div className="col-12">
              <ul>
              {shops.map((shop)=>{
                return (<li key={shop.id} >{shop.company} {shop.shop_type} {shop.shop_url}
                  <p className="card-text border-top pt-2">
                  <Link to={`/my-shop/edit-shop/${shop.id}`}>Edit</Link> |
                  <Link className="ml-2" to={`/my-shop/delete-shop/${shop.id}`}>
                    Delete
                  </Link>
                  </p>
                </li>)
              })}
              </ul>
              
            </div>
          </div>
      </div> 
    );
  }
}

export default AllShops;
