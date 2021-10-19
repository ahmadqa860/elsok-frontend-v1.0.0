import React,{Component} from 'react';
import http from '../../services/httpService';
import {apiUrl} from '../../config.json';
import {storageUrl} from '../../config.json';
import { Link } from 'react-router-dom';


class ProductView extends Component{

    state={
        data:"",
        contactInfo:"",
    }
    
    async componentDidMount(){
        const productId = this.props.match.params.id;
        //const category = this.props.match.params.categoryUrl;
        const {data} = await http.get(`${apiUrl}/shop/products/${productId}`); 
        this.setState({data});
    }

     handleInfo= async()=>{
        const productId = this.state.data.id;
        const {data} = await http.get(`${apiUrl}/shop/productContact/${productId}`);
        this.setState({contactInfo:data});
    }

    render(){
        const {data} = this.state;
        
        return (
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
                                        if(index===0){
                                            carouselCls += ' active';
                                        }
                                        return(
                                        <div className={carouselCls} key={index}>
                                            <Link className="gallery_img" to={`${storageUrl}/${image.img_src}`} title="Second Slide">
                                                <img className="d-block w-100" src={`${storageUrl}/${image.img_src}`} alt="Second slide"/>
                                            </Link>
                                            <div className="product_badge">
                                                <span className="badge-new">Sale</span>
                                            </div>
                                        </div>
                                        )
                                    })
                                    }

                                    <ol className="carousel-indicators">
                                        { data && data.images.map(function(image,index){
                                            let cls = "";
                                            if(index === 0){
                                                cls = "active";
                                            }

                                            return(
                                                <li key={index} className={cls}  data-target="#product_details_slider" data-slide-to={index}  style={{backgroundImage: `url(${storageUrl}/${image.img_src})`}} />
                                            );
                                            
                                        })
                                    
                                        }
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="single_product_desc">
                            <h4 className="title mb-2"> سيارى مازدا أخر موديل{data.product_title}</h4>
                            <div className="single_product_ratings mb-2">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <span className="text-muted">(8 Reviews)</span>
                            </div>
                            <h4 className="price mb-4">{data.product_price} <span>$190</span></h4>
                            <div className="short_overview mb-4">
                                <h6>Overview</h6>
                                <p>{data.product_description}</p>
                            </div>
                            <div className="others_info_area mb-3 d-flex flex-wrap">
                                <Link className="add_to_wishlist" to="wishlist.html">WISHLIST <i className="fa fa-heart" aria-hidden="true"></i></Link>
                                <Link className="share_with_friend" to="#">SHARE WITH FRIEND <i className="fa fa-share" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="product_details_tab section_padding_100_0 clearfix">
                            
                            <ul className="nav nav-tabs" role="tablist" id="product-details-tab">
                                <li className="nav-item">
                                    <Link to="#description" className="nav-link active" data-toggle="tab" role="tab">Description</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#reviews" className="nav-link" data-toggle="tab" role="tab">Reviews <span className="text-muted">(3)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#addi-info" className="nav-link" data-toggle="tab" role="tab">Additional Information</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#refund" className="nav-link" data-toggle="tab" role="tab">Return &amp; Cancellation</Link>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane fade show active" id="description">
                                    <div className="description_area">
                                        <h5>Description</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur nulla similique deserunt nemo ea eum expedita, et repellat repudiandae unde quia molestias deleniti incidunt, ad cupiditate. Corporis ipsam minus officiis neque magni harum accusantium nobis labore veritatis, consectetur ab rerum.</p>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex cum dolore, adipisci vitae quidem. Quaerat tenetur explicabo tempore beatae dolor. Quo ipsa labore, itaque ea ratione. Ratione labore quae corporis.</p>

                                        <div className="embed-responsive embed-responsive-16by9 mb-3">
                                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/tjvOOKx7Ytw?ecver=1" allowFullScreen></iframe>
                                        </div>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic facere quos repudiandae ratione maiores accusantium suscipit, quod fugiat. Fugit quod laborum quidem, quos adipisci harum aspernatur, repudiandae, beatae expedita rerum ipsam dicta molestias et quis sapiente maiores amet laudantium minus nostrum. Nobis amet veritatis autem illo neque voluptas culpa vero iusto distinctio perspiciatis.</p>

                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima animi ab, quis atque, sed nulla veniam quisquam amet perspiciatis, aliquam dolore tempora, consequuntur beatae quae dolor rem repellendus! Vitae architecto sequi quo eaque iusto impedit suscipit non maxime sint totam, nesciunt necessitatibus iste nulla ab, veritatis assumenda.</p>
                                    </div>
                                </div>

                                <div role="tabpanel" className="tab-pane fade" id="reviews">
                                    <div className="reviews_area">
                                        <ul>
                                            <li>
                                                <div className="single_user_review mb-15">
                                                    <div className="review-rating">
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <span>for Quality</span>
                                                    </div>
                                                    <div className="review-details">
                                                        <p>by <Link to="#">Designing World</Link> on <span>12 Sep 2019</span></p>
                                                    </div>
                                                </div>
                                                <div className="single_user_review mb-15">
                                                    <div className="review-rating">
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <span>for Design</span>
                                                    </div>
                                                    <div className="review-details">
                                                        <p>by <Link to="#">Designing World</Link> on <span>12 Sep 2019</span></p>
                                                    </div>
                                                </div>
                                                <div className="single_user_review">
                                                    <div className="review-rating">
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <span>for Value</span>
                                                    </div>
                                                    <div className="review-details">
                                                        <p>by <Link to="#">Designing World</Link> on <span>12 Sep 2019</span></p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
       
    }
}

export default ProductView;