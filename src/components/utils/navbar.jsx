import React,{Component} from 'react';
import http from '../../services/httpService';
import {logout} from '../../services/userService';
import {apiUrl} from '../../config.json';
import {Link, NavLink} from 'react-router-dom';
import "../../css/navbar.css";
import elsokLogo from "../../img/core-img/elsok-logo.svg";

class Navbar extends Component{

    state={
        categories:[]
    };

    async componentDidMount(){
        const {data}  = await http.get(`${apiUrl}/categories`);
        this.setState({categories:data});
    }
    
    handleLogout = async()=>{
        await logout();
        window.location.reload(false);
    }

    render(){
        const {categories} = this.state;
        const { user } = this.props;
    return (
        
        /* <nav className="header">
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
        </nav> */

        <header className="header_area header">
        <div className="top-header-area">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-6">
                        <div className="welcome-note">
                            <span className="popover--text" data-toggle="popover" data-content="Welcome to Bigshop ecommerce template."><i className="icofont-info-square"></i></span>
                            <span className="text">اهلا في موقعنا السوق</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="language-currency-dropdown d-flex align-items-center justify-content-end">
                           
                            <div className="language-dropdown">
                                <div className="dropdown">
                                    {/* <NavLink className="btn btn-sm dropdown-toggle" to={"#"} role="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        العربية
                                    </NavLink> */}
                             {/*        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                                        <a className="dropdown-item" href="#">Bangla</a>
                                        <a className="dropdown-item" href="#">Arabic</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       
        <div className="bigshop-main-menu">
            <div className="container-flued header-flued">
            <div className="container">
                <div className="classy-nav-container breakpoint-off">
                    <nav className="classy-navbar" id="bigshopNav">

                        <img className="header__logo" src={elsokLogo} alt="logo"/>

                        <div className="classy-navbar-toggler">
                            <span className="navbarToggler"><span></span><span></span><span></span></span>
                        </div>

                        <div className="classy-menu mt-auto">
                           
                            <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                            </div>
   
                            <div className="classynav navlink">
                                <ul>
                                    <li key="#"><NavLink to={'/'}>الرئيسية</NavLink></li>
                                    {categories.map((categorie) =>
                                        <li key={categorie.categorie_url}><NavLink className="nav-link" to={"/categories/"+categorie.categorie_url} href={"/categories/"+categorie.categorie_url} >{categorie.categorie_title}</NavLink></li>
                                    )}
                                    <li key="contact.html"><NavLink className="nav-link" to="contact.html">تواصل معنا</NavLink></li>
                                </ul>
                            </div>
                        </div>

                        {!user && (
                            <div className="mr-auto d-flex align-items-center justify-content-end">
                                <div className="account-area header-user">
                                    <NavLink className="nav-link"  to={"/signin"}>تسجيل الدخول</NavLink>
                                </div>
                            </div>
                        )}

                       {user && (
                        <div className="hero_meta_area mr-auto d-flex align-items-center justify-content-end">
                            <div className="account-area">
                                <div className="user-thumbnail">
                                    <img src="img/bg-img/dashboard.png" alt=""/>
                                </div>
                                <ul className="user-meta-dropdown">
                                    <li className="user-title"><span>اهلا</span> {user.name}</li>
                                    <li><NavLink to={"/my-profile"}>الحساب الخاص</NavLink></li>
                                    <li><NavLink to={"order-list.html"}>Orders List</NavLink></li>
                                    <li><NavLink to={"wishlist.html"}>Wishlist</NavLink></li>
                                    <li><NavLink to={"/home"} onClick={this.handleLogout}><i className="icofont-logout"></i> Logout</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        )}
                    </nav>
                       
                </div>
            </div>
            </div>
        </div>
    </header>
    );
};
};

export default Navbar;