import React,{Component} from 'react';
import http from "../../services/httpService";
import {apiUrl} from "../../config.json";
import { NavLink } from 'react-router-dom';


class CategoryArea extends Component {

    async componentDidMount(){
        const {data}  = await http.get(`${apiUrl}/categories`);
        this.setState({categories:data});
    }

    render(){
        return (
            <section className="offer_area mt-50 mb-50">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="beach_offer_area mb-4 mb-md-0">
                            <img src="img/product-img/beach.png" alt="beach-offer"/>
                            <div className="beach_offer_info">
                                <p>Upto 70% OFF</p>
                                <h3>Beach Item</h3>
                                <a href="#" >SHOP NOW</a>
                                <NavLink className="btn btn-primary btn-sm mt-15" to="/categories/cars">go to</NavLink>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-12 col-md-6 col-lg-4">
                        
                        <div className="apparels_offer_area">
                            <img src="img/product-img/weekly-offer.jpg" alt="Beach-Offer"/>
                            <div className="apparels_offer_info d-flex align-items-center">
                                <div className="apparels-offer-content">
                                    <h4>Apparel &amp; <br/><span>Garments</span></h4>
                                    <a href="#" className="btn">Buy Now <i className="icofont-rounded-right"></i></a>
                                </div>
                            </div>
                        </div>
    
                        
                        <div className="apparels_offer_area mt-30">
                            <img src="img/product-img/weekly-offer.jpg" alt="weekly-deals"/>
                            <div className="apparels_offer_info d-flex align-items-center">
                                <div className="apparels-offer-content">
                                    <h4>Apparel &amp; <br/><span>Garments</span></h4>
                                    <a href="#" className="btn">Buy Now <i className="icofont-rounded-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        
                        <div className="apparels_offer_area">
                            <img src="img/product-img/apparels.jpg" alt="Beach-Offer"/>
                            <div className="apparels_offer_info d-flex align-items-center">
                                <div className="apparels-offer-content">
                                    <h4>Apparel &amp; <br/><span>Garments</span></h4>
                                    <a href="#" className="btn">Buy Now <i className="icofont-rounded-right"></i></a>
                                </div>
                            </div>
                        </div>
    
                        
                        <div className="apparels_offer_area mt-30">
                            <img src="img/product-img/weekly-offer.jpg" alt="weekly-deals"/>
                            <div className="apparels_offer_info d-flex align-items-center">
                                <div className="apparels-offer-content">
                                    <h4>Apparel &amp; <br/><span>Garments</span></h4>
                                    <a href="#" className="btn">Buy Now <i className="icofont-rounded-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    
                </div>
            </div>
        </section>
        );
    };
}


export default CategoryArea;