import React,{Component} from 'react';
import http from "../../services/httpService";
import {apiUrl} from "../../config.json";
import { NavLink } from 'react-router-dom';

import carsCategoryImage from "../../img/bg-img/carsCategory.jpg";
import electronicsCategoryImage from "../../img/bg-img/electronicsCategory.jpg";
import mobileCategoryImage from "../../img/bg-img/mobileCategory.jpg";
import propertyCategoryImage from "../../img/bg-img/propertyCategory.jpg";
import toolsCategoryImage from "../../img/bg-img/toolsCategory.jpg";
import "../../css/fonts-colors.css";

class CategoryArea extends Component {

    async componentDidMount(){
        const {data}  = await http.get(`${apiUrl}/categories`);
        this.setState({categories:data});
    }

    render(){
        return (
            <section className="offer_area mt-50">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="beach_offer_area mb-4 mb-md-0">
                            <img src={carsCategoryImage} alt="beach-offer"/>
                            <div className="beach_offer_info">
                                <h3>سيارات</h3>
                                <NavLink  to="/categories/cars">
                                <p>جميع انواع السيارات والمركبات الجديدة والمستعملة</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-12 col-md-6 col-lg-4">
                        
                        <div className="apparels_offer_area">
                            <img src={electronicsCategoryImage} alt="Beach-Offer"/>
                            <div className="apparels_offer_info d-flex align-items-center">
                                <div className="apparels-offer-content">
                                    <h4>أجهزة - ألكترونيات &amp; <span>مستلزماتها</span></h4>
                                    <NavLink  to="/categories/cars">كمبيوتر, شاشات, تلفزيونات, سماعات, مكبرات صوت وجميع المستلزمات</NavLink>
                                </div>
                            </div>
                        </div>
    
                        
                        <div className="apparels_offer_area mt-30">
                            <img src={mobileCategoryImage} alt="weekly-deals"/>
                            <div className="apparels_offer_info d-flex align-items-center">
                                <div className="apparels-offer-content">
                                    <h4>الجوالات &amp; <br/><span>مستلزماتها</span></h4>
                                    <NavLink  to="/categories/cars">هواتف ذكية جديدة\مستعملة, تابلت, ساعات ذكية, اكسسوارات وكل مستلزمات الهاتف</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        
                        <div className="apparels_offer_area">
                            <img src={propertyCategoryImage} alt="Beach-Offer"/>
                            <div className="apparels_offer_info d-flex align-items-center">
                                <div className="apparels-offer-content">
                                    <h4>عقارات مدنية &amp; <br/><span>تجارية</span></h4>
                                    <NavLink  to="/categories/cars">أراضي, شقق, محلات تجارية, عمارات للبيع أو للأستئجار</NavLink>
                                </div>
                            </div>
                        </div>
    
                        
                        <div className="apparels_offer_area mt-30">
                            <img src={toolsCategoryImage} alt="weekly-deals"/>
                            <div className="apparels_offer_info d-flex align-items-center">
                                <div className="apparels-offer-content">
                                    <h4>أدوات عمل&amp; <br/><span>صيانة</span></h4>
                                    <NavLink  to="/categories/cars">أدوات يدوية وكهربائية لجميع المجالات</NavLink>
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