import React from 'react'
import Form from '../common/form'
import {apiUrl} from "../../config.json";
import http from '../../services/httpService';

class DeleteShop extends Form {
    
    state = {};
    schema= {};

      doSubmit = async ()=>{
        const productId = this.props.match.params.id;
        const {data} = await http.delete(`${apiUrl}/seller-products/${productId}`);
        console.log(data); 
      }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <form onSubmit={this.handleSubmit} autoComplete="off" method="Delete">
                        {this.renderButton("Delete Product")}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default DeleteShop;