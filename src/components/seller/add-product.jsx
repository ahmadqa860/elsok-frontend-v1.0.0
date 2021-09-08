import React  from 'react'
import Form from '../common/form';
import Joi from "joi-browser";
import http from "../../services/httpService";
import {apiUrl} from "../../config.json";
import ProfileHeader from '../utils/profileHeader';
import ProfileSidebar from '../utils/profileSidebar';


class AddNewProduct extends Form{

    state={
        data:{
            categorie_id:"",
            product_title:"",
            product_description:"",
            product_price:"",
            uploadImage:null, 
        },
        errors:{},
        categories:[],
    };

    async componentDidMount(){
        const {data}  = await http.get(`${apiUrl}/categories`);
        this.setState({categories:data});
    }

    schema={
        categorie_id: Joi.required().label("Category"),
        product_title: Joi.string().required().label("Title"),
        product_description: Joi.string().required().label("Description"),
        product_price: Joi.string().required().label("Price"),
        uploadImage:Joi.required().label("uploadImage"), 
    };

    handleSelect = (event) => {
        let categorie_id = event.target.value;
        const {data} = this.state;
        data.categorie_id = categorie_id;
        this.setState({data});
    };

    doSubmit = async () => {
        var { data } = this.state;
        
        var bodyFormData = new FormData();
        for(const uploadImage of data.uploadImage){
            bodyFormData.append('uploadImages[]',uploadImage);
        }
        
        bodyFormData.append('categorie_id',data.categorie_id);
        bodyFormData.append('product_title',data.product_title);
        bodyFormData.append('product_description',data.product_description);
        bodyFormData.append('product_price',data.product_price);
        
        bodyFormData.forEach(elem=>console.log(elem));    
        console.log(bodyFormData);
        //console.log(data.uploadImage);
        await http.post(`${apiUrl}/seller-products`,bodyFormData);
       
    }

    handleFileSelected=(event)=>{
        let {data} = this.state;
        data.uploadImage = event.target.files;
        this.setState({data});
    }


    render(){
        const {categories} = this.state;

        return (
            <React.Fragment>
        <ProfileHeader />
        <section className="my-account-area section_padding_100_50">
            <div className="container">
                <div className="row">
                    <ProfileSidebar />
                    <div className="col-12 col-lg-9">
                        <div className="my-account-content mb-50">
                            <h5 className="mb-3">Account Details</h5>
                            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST" encType="multipart/form-data">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
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
                                    <div className="col-12">
                                        <div className="form-group">
                                            {this.renderInput("product_title", "Title")}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                        {this.renderInput("product_description", "description")}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                        {this.renderInput("product_price", "العنوان *")}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input name="file" type="file" onChange={this.handleFileSelected} multiple/>
                                        </div>
                                    </div> 
                                     
                                    
                                    <div className="col-12">
                                         {this.renderButton("Add Product")} 
                                        
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
        )
    }

}

export default AddNewProduct;