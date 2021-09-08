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
                        <li><NavLink to="my-account.html">Dashboard</NavLink></li>
                        <li><NavLink to="/seller/my-products">my products</NavLink></li>
                        <li><NavLink to="/seller/add-product">add product</NavLink></li>
                        <li><NavLink to="addresses.html">Addresses</NavLink></li>
                        <li className="active"><NavLink to="account-details.html">Account Details</NavLink></li>
                        <li><NavLink to="/" onClick={this.handleLogout}>Logout</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default ProfileSidebar;