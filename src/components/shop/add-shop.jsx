import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import http from "../../services/httpService";
import { apiUrl } from "../../config.json";

class AllShops extends Form {
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

  doSubmit = async () => {
    var {data} = this.state;
    await http.post(`${apiUrl}/shop/my-shop`,data);
    console.log(data);
    
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
                        {this.renderButton("ADD SHOP")}
                    </form>
                </div>
            </div>
        </div>
        );
  }
}

export default AllShops;
