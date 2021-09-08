import React, { Component } from "react";
import PageHeader from "../common/pageHeader";
import Sidebar from "../common/sidebar";
import { NavLink } from "react-router-dom";

class MyShop extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-white bg-white shadow-sm">
          <div className="container">
            <div
              className="collapse navbar-collapse"
              id="navbarsExampleDefault"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-item nav-link" to="#">
                    Add Product
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-item nav-link" to="#">
                    Add Shop
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Sidebar />
            </div>
            <div className="col-4 ">
              <PageHeader titleText="Welcome to your shop" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MyShop;
