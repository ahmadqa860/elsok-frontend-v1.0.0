import React from 'react'
import Form from '../common/form'
import {apiUrl} from "../../config.json";
import http from '../../services/httpService';

class DeleteShop extends Form {
    
    state = {};
    schema= {};

      doSubmit = async ()=>{
        const shopId = this.props.match.params.id;
        const {data} = await http.delete(`${apiUrl}/shop/my-shop/${shopId}`);
        console.log(data); 
      }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
                        {this.renderButton("Delete card")}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default DeleteShop;