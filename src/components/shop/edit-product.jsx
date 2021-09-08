import React from 'react';
import Form from '../common/form';
import http from '../../services/httpService';
import {apiUrl} from '../../config.json';

 class EditProduct extends Form {

    state = {
        data:{
            categorie_id:"",
            product_title:"",
            product_description:"",
            product_price:"",
            product_images:[],
        },
        errors:{},
    }

    schema={

    }

    mapToView(product){
        return {
            categorie_id: product.categorie_id,
            product_title: product.product_title,
            product_description: product.product_description,
            product_price: product.product_price,
            product_images:[product.product_images],
        }
    }

    async componentDidMount(){
        const productId = this.props.match.params.id;
        const {data} = await http.get(`${apiUrl}/shop/my-products/${productId}`);
        this.setState({data:this.mapToView(data)});
    }

    doSubmit = ()=>{

    }

    render() {
        return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01">
                            <option select='true' >Choose...</option>
                            <option defaultValue="1">One</option>
                            <option defaultValue="2">Two</option>
                            <option defaultValue="3">Three</option>
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
        )
    }
}

export default EditProduct;
