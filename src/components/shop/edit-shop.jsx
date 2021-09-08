import React from 'react'
import Form from '../common/form'
import Joi from "joi-browser";
import {apiUrl} from "../../config.json";
import http from '../../services/httpService';

class EditShop extends Form {
    
    state = {
        data: {
            company: '',
            shop_type: '',
            shop_description: '',
            shop_url: '',
           
        },
        errors:{}
      };
      
      schema = {
        company: Joi.string().required().label("Company"),
        shop_type: Joi.string().required().label("Type"),
        shop_description: Joi.string().required().label("Description"),
        shop_url: Joi.string().required().label("Url"),
      };

      async componentDidMount() {
        const shopId = this.props.match.params.id;
        const { data } = await http.get(`${apiUrl}/shop/my-shop/${shopId}`);
        
        this.setState({ data: this.mapToViewModel(data) });  
      }

      mapToViewModel(shop){
          return {
              company: shop.company,
              shop_type: shop.shop_type,
              shop_description: shop.shop_description,
              shop_url: shop.shop_url,
          };
      }

      doSubmit = async ()=>{
        var {data} = this.state;
        const shopId = this.props.match.params.id;
        await http.put(`${apiUrl}/shop/my-shop/${shopId}`,data);
        
      }
    
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
                        {this.renderInput('company','Company')}
                        {this.renderInput('shop_type','Shop Type')}
                        {this.renderInput('shop_description','Description')}
                        {this.renderInput('shop_url','Url')}
                        {this.renderButton("Edit SHOP")}
                    </form>
                </div>
            </div>
        </div>
        )
    }
}
export default EditShop;