<section className="single_product_details_area section_padding_100">
<div className="container">
    <div className="row">
        <div className="col-12 col-lg-6">
            <div className="single_product_thumb">
                <div id="product_details_slider" className="carousel slide" data-ride="carousel">

                
                    <div className="carousel-inner">
                        {
                            data && data.images.map(function(image,index){
                                let carouselCls = 'carousel-item';
                                if(index==0){
                                    carouselCls += ' active';
                                }
                                return(
                                    <div className={carouselCls} key={index}>
                                <a className="gallery_img" href={`${storageUrl}/${image.img_src}`} title="Second Slide">
                                    <img className="d-block w-100" src={`${storageUrl}/${image.img_src}`} alt="Second slide"/>
                                </a>
                                <div className="product_badge">
                                    <span className="badge-new">Sale</span>
                                </div>
                            </div>
                                )
                            })
                        }
                   
                    </div>                  
                    <ol className="carousel-indicators">
                        { data && data.images.map(function(image,index){
                            let cls = "";
                            if(index == 0){
                                cls = "active";
                            }

                            return(
                                <li key={index} className={cls}  data-target="#product_details_slider" data-slide-to={index} />
                            );
                            
                        })
                       
                        }
                    </ol>
                </div>
            </div>
        </div>

        <div className="col-12 col-lg-6">
            <div className="single_product_desc">
                <h4 className="title mb-2">{data.product_title}</h4>
                    <h4 className="price mb-4">{data.product_price}</h4>                   
                <div className="short_overview mb-4">
                    <h6>Overview</h6>
                        <p>{data.product_description}</p>
                </div>
             
                <div className="others_info_area mb-3 d-flex flex-wrap">
                    <a className="add_to_wishlist" href="wishlist.html"><i className="fa fa-heart" aria-hidden="true"></i> WISHLIST</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="container">
<div className="row">
    <div className="col-12">
    <ul className="nav nav-tabs" role="tablist" id="product-details-tab">
                <li className="nav-item">
                    <a href="#addi-info" onClick={this.handleInfo} className="nav-link" data-toggle="tab" role="tab">Additional Information</a>
                </li>
                
            </ul>
        <div className="product_details_tab section_padding_100_0 clearfix">
            <div role="tabpanel" className="tab-pane fade" id="addi-info">
                        <div className="additional_info_area">
                            <h5>Additional Info</h5>
                            <p>
                                {contactInfo && (
                                    <React.Fragment>
                                    name:{contactInfo.name} <br/>
                                    phone:{contactInfo.mobile} <br/>
                                    address:{contactInfo.address}<br/>
                                    </React.Fragment>
                                )}
                            </p>
                        </div>
            </div>
        </div>
    </div>
</div>
</div>

</section>