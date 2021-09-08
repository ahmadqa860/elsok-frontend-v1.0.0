import React from 'react';
import Joi from "joi-browser";
import http from '../../services/httpService';
import {apiUrl} from '../../config.json';
import Form from '../common/form';

class EditProduct extends Form{

    state={
        data:{
            categorie_id:"",
            product_title:"",
            product_description:"",
            product_price:"",
            images:"",
        },
        errors:{},
        categories:[],
    }

    async componentDidMount(){
        const productId = this.props.match.params.id;
        var {data} = await http.get(`${apiUrl}/seller-products/${productId}`);
        this.setState({data:this.mapToViewModel(data)});
        var {data}  = await http.get(`${apiUrl}/categories`);
        this.setState({categories:data});
    }

    schema = {
        categorie_id: Joi.required().label("Category Id"),
        product_title: Joi.string().required().label("Title"),
        product_description: Joi.string().required().label("Description"),
        product_price: Joi.string().required().label("Price"),
        images: Joi.string().required().label("Images"),
    };

    mapToViewModel(data){
        return {
            categorie_id: data.categorie_id,
            product_title: data.product_title,
            product_description: data.product_description,
            product_price: data.product_price,
            images: data.images,
        };
    }

    render(){
        const {categories} = this.state;
        return(
            <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                        </div>
                        <select
                            name="categorie_id"
                            id="categorie_id"
                            className="custom-select"
                            onChange={this.handleSelect}
                        >
                        <option defaultValue="">Choose...</option> 
                        {categories.map((category)=>(
                        <option key={category.id} value={category.id}>{category.categorie_title}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
                        {this.renderInput('product_title','Product Title')}
                        {this.renderInput('product_description','Product Description')}
                        {this.renderInput('product_price','Product Price')}
                        {this.renderButton("Edit Product")}
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default EditProduct;