import React, { Component } from 'react';
import {apiUrl} from "../config.json";
import http from "../services/httpService";

import Product from "./utils/product";

class CategoryProducts extends Component{

    state={
        data:{},
        validUser:false,
        currentCategoryUrl:'',
    }


    async componentDidMount(){
        
        let {currentCategoryUrl} = this.state;
        
        currentCategoryUrl = this.props.match.params.categoryUrl;
        this.setState({currentCategoryUrl}); 
        const {data} = await http.get(`${apiUrl}/shop/${currentCategoryUrl}`);
        this.setState({data});
        this.setState({validUser:false});
    
    }

    async componentDidUpdate(prevProps, prevState){
        let {currentCategoryUrl} = this.state;

        if(currentCategoryUrl !== this.props.match.params.categoryUrl)
        {
            currentCategoryUrl = this.props.match.params.categoryUrl; 
            this.setState({currentCategoryUrl});
            const {data} = await http.get(`${apiUrl}/shop/${currentCategoryUrl}`);
            this.setState({data});
        }

    }

    render(){
        
        const {data} = this.state;
        if(data.length > 0){
         return (
             <section className="shop_grid_area section_padding_100_70">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-7 col-md-8 col-lg-9">
{/*                         <div className="shop_top_sidebar_area d-flex flex-wrap align-items-center justify-content-between">
                        <div className="view_area d-flex">
                            <div className="grid_view">
                                <a href="shop-grid-left-sidebar.html" data-toggle="tooltip" data-placement="top" title="Grid View"><i class="icofont-layout"></i></a>
                            </div>
                            <div className="list_view ml-3">
                                <a href="shop-list-left-sidebar.html" data-toggle="tooltip" data-placement="top" title="List View"><i class="icofont-listine-dots"></i></a>
                            </div>
                        </div>
                        <select className="small right">
                            <option selected>Short by Popularity</option>
                            <option value="1">Short by Newest</option>
                            <option value="2">Short by Sales</option>
                            <option value="3">Short by Ratings</option>
                        </select>
                    </div> */}
                    <div className="shop_grid_product_area">
                        <div className="row justify-content-center">
                            <Product props={this.state} />
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </section> 
        ); 
        }else{
            return "no Product Found";
        }
    }

}
export default CategoryProducts;