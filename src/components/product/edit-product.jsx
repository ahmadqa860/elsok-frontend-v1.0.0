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
        product_title: Joi.string().required().label("Title"),
        product_description: Joi.string().required().label("Description"),
        product_price: Joi.required().label("Price"),
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

    handleSelect = (event) => {
        let categorie_id = event.target.value;
        const {data} = this.state;
        data.categorie_id = categorie_id;
        this.setState({data});
    };

    handleFileSelected=(event)=>{
        let {data} = this.state;
        data.uploadImage = event.target.files;
        this.setState({data});
    }

    doSubmit = async ()=>{
        var {data} = this.state;
        const productId = this.props.match.params.id;
        try{
            await http.put(`${apiUrl}/seller-products/${productId}`,data);

        }catch(ex){
            const { data } = ex.response;
            const errors = data.errors;
            const err = {};
            for (const error in errors) {
                err[error] = errors[error][0];
            }
            this.setState({ errors: err });

            if (ex.response && ex.response.status === 400) {
            }
        }
        
      }

    render(){
        const {categories} = this.state;
        
        return(
            <div className="container mt-3">
            <div className="row">
               
                <div className="col-lg-6">
                    <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
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
                        {this.renderInput('product_title','Product Title')}
                        {this.renderInput('product_description','Product Description')}
                        {this.renderInput('product_price','Product Price')}
                        {this.renderInputFile("file","الصور")}
                        {this.renderButton("Edit Product")}
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default EditProduct;