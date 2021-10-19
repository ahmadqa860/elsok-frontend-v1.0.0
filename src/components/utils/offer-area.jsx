import React from 'react';
import "../../css/fonts-colors.css";



function OfferArea() {

    return (

        <div className="top_catagory_area clearfix mb-50">
        <div className="container">
            <div className="row">
                <div className="col-12 mt-50 d-flex justify-content-center">
                    <h4 className="Lemonada-font">قريبا في موقعنا</h4>
                </div>
                <div className="col-12 col-md-4">
                    <div className="single_catagory_area mt-30">
                        
                            <img src="img/bg-img/c1.jpg" alt=""/>
                        
                    </div>
                </div>

                
                <div className="col-12 col-md-4">
                    <div className="single_catagory_area mt-30">
                        
                            <img src="img/bg-img/c2.jpg" alt=""/>
                        
                    </div>
                </div>

                
                <div className="col-12 col-md-4">
                    <div className="single_catagory_area mt-30">
                       
                            <img src="img/bg-img/c3.jpg" alt=""/>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
};


export default OfferArea;