import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { logout } from "../../services/userService";


class ProfileSidebar extends Component{

    handleLogout = async()=>{
        await logout();
        window.location.reload(false);
    }


    render(){
        return(
            <div className="col-12 col-lg-3">
                <div className="my-account-navigation mb-50">
                    <ul>
                        <li><NavLink to="/dashboard">لوحة رئيسية</NavLink></li>
                        <li><NavLink to="/product/my-products">منتجاتي</NavLink></li>
                        <li><NavLink to="/product/add-product">أضف منتج</NavLink></li>
                        <li><NavLink to="/" onClick={this.handleLogout}>تسجيل خروج</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default ProfileSidebar;