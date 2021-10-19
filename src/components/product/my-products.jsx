import React, { Component } from 'react';
import http from '../../services/httpService';
import {apiUrl} from '../../config.json';
import ProfileSidebar from '../utils/profileSidebar';
import ProfileHeader from '../utils/profileHeader';
import Product from '../utils/product';


class MyProducts extends Component{

    state = {
        data:{},
        validUser:false,
    }

    async componentDidMount(){
        try{
        const {data} = await http.get(`${apiUrl}/seller-products`);
        this.setState({data});
        this.setState({validUser:true});
        }catch(e){
            console.log(e);
            this.setState({validUser:false});
        }
    }
    
    render(){
        const {data} = this.state;
        return (
            <React.Fragment>
                <ProfileHeader titleText="my products" />
                <section className="shop_list_area section_padding_100_70">
                    <div className="container">
                        <div className="row">
                            <ProfileSidebar />
                            <div className="col-12 col-md-8 col-xl-9">
                                <div className="shop_grid_product_area">
                                    <div className="row justify-content-center">
                                        {data.length > 0 && <Product props={this.state} />}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
        }
}

export default MyProducts;