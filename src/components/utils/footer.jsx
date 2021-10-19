import React from "react";
import { Link } from "react-router-dom";
import playStore from "../../img/core-img/play-store.png";
import appStore from "../../img/core-img/app-store.png";

const Footer = () => {
  return (
    <footer className="footer_area section_padding_100_0">
    <div className="container">
        <div className="row">
            
            <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3">
                <div className="single_footer_area mb-100">
                    <div className="footer_heading mb-4">
                        <h6>تواصل معنا</h6>
                    </div>
                    <ul className="footer_content">
                        <li><span>العنوان</span> حيفا</li>
                        <li><span>الهاتف</span>052-2264702</li>
                        <li><span>البريد الألكتروني:</span>elsok.group@gmail.com</li>
                    </ul>
                    <div className="footer_social_area mt-15">
                        <Link to="https://www.facebook.com/elsok.net/"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                    </div>
                </div>
            </div>

           
            <div className="col-12 col-sm-6 col-md col-lg-4 col-xl-2">
                <div className="single_footer_area mb-100">
                    <div className="footer_heading mb-4">
                        <h6>لدينا بالسوق</h6>
                    </div>
                    <ul className="footer_widget_menu">
                        <li><Link to="/"><i className="icofont-rounded-left"></i>الرئيسية</Link></li>
                        <li><Link to="/categories/cars"><i className="icofont-rounded-left"></i>سيارات</Link></li>
                        <li><Link to="/categories/electronics"><i className="icofont-rounded-left"></i>الألكترونيات</Link></li>
                        <li><Link to="/categories/immovables"><i className="icofont-rounded-left"></i>عقارات</Link></li>
                        <li><Link to="/categories/mobiles"><i className="icofont-rounded-left"></i>الجوالات</Link></li>
                        <li><Link to="/categories/pcs&accessories"><i className="icofont-rounded-left"></i>الكمبيوتر ومستلزماته</Link></li>
                        <li><Link to="#"><i className="icofont-rounded-left"></i>الموضة</Link></li>
                    </ul>
                </div>
            </div>

           
            <div className="col-12 col-sm-6 col-md col-lg-4 col-xl-2">
                <div className="single_footer_area mb-100">
                    <div className="footer_heading mb-4">
                        <h6>عن السوق</h6>
                    </div>
                    <ul className="footer_widget_menu">
                        <li><Link to="#"><i className="icofont-rounded-left"></i>ما هو السوق؟</Link></li>
                        <li><Link to="#"><i className="icofont-rounded-left"></i>كيف أستخدم الموقع؟</Link></li>
                        <li><Link to="#"><i className="icofont-rounded-left"></i>الخدمات الأعلانية</Link></li>
                        <li><Link to="#"><i className="icofont-rounded-left"></i>فريق السوق</Link></li>
                    </ul>
                </div>
            </div>

           
            <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-2">
                <div className="single_footer_area mb-100">
                    <div className="footer_heading mb-4">
                        <h6>مساعدة</h6>
                    </div>
                    <ul className="footer_widget_menu">
                        <li><Link to="#"><i className="icofont-rounded-left"></i>اتصل بنا</Link></li>
                        <li><Link to="#"><i className="icofont-rounded-left"></i>اتفاقية الاستخدام</Link></li>
                        <li><Link to="#"><i className="icofont-rounded-left"></i>سياسة الخصوصية</Link></li>
                        <li><Link to="#"><i className="icofont-rounded-left"></i>قواعد السلامة</Link></li>
                    </ul>
                </div>
            </div>

       
            <div className="col-12 col-md-7 col-lg-8 col-xl-3">
                <div className="single_footer_area mb-100">
                    <div className="footer_heading mb-4">
                        <h6>قريبا سيتم تحميل التطبيق</h6>
                    </div>
                    <div className="apps_download">
                        <Link to="#"><img src={playStore} alt="Play Store"/></Link>
                        <Link to="#"><img src={appStore} alt="Apple Store"/></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

  
    <div className="footer_bottom_area">
        <div className="container">
            <div className="row align-items-center">
               
                <div className="col-12 col-md-6">
                    <div className="copywrite_text">
                        <p>Made with <i className="fa fa-heart" aria-hidden="true"></i> by <Link to="#">Designing World</Link></p>
                    </div>
                </div>
                
                <div className="col-12 col-md-6">
                    <div className="payment_method">
                        <img src="img/payment-method/paypal.png" alt=""/>
                        <img src="img/payment-method/maestro.png" alt=""/>
                        <img src="img/payment-method/western-union.png" alt=""/>
                        <img src="img/payment-method/discover.png" alt=""/>
                        <img src="img/payment-method/american-express.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  );
};

export default Footer;
