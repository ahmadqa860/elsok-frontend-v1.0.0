import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./protectedRoute";
import userInfo from "./services/userService";
import http from "./services/httpService";
import { apiUrl } from "./config.json";

import Navbar from "./components/utils/navbar";
import Footer from "./components/utils/footer";

import CategoryProducts from "./components/categoryProducts";
import ProductView from "./components/utils/productView";

import Home from "./components/home";
import About from "./components/about";

import Signup from "./components/user/signup";
import AddUser from "./components/user/add-user";
import Signin from "./components/user/signin";
import Profile from "./components/user/profile";
import EditProfile from "./components/user/edit-profile";

import Dashboard from "./components/shop/dashboard";
import AllShops from "./components/shop/all-shops";
import AddShop from "./components/shop/add-shop";
import EditShop from "./components/shop/edit-shop";
import DeleteShop from "./components/shop/delete-shop";
import AllProducts from "./components/shop/all-products";
import EditShopProduct from "./components/shop/edit-product";

import MyProducts from "./components/product/my-products";
import AddNewProduct from "./components/product/add-product";
import EditProduct from "./components/product/edit-product";

import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "jquery/dist/jquery";
import "popper.js/dist/popper";
import "./js/default/scrollup";


class App extends Component {
  state = {
    user: "",
    valid: "",
  };

  async componentDidMount() {
    if (userInfo.hasToken()) {
      const { data } = await http.get(`${apiUrl}/user/profile`);
      this.setState({ user: data });
    } else {
      this.setState({ user: false });
    }
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <Navbar user={user} />

        <Switch>
          <ProtectedRoute path="/my-shop/dashboard" component={Dashboard} />
          <ProtectedRoute path="/my-shop/all-shops" component={AllShops} />
          <ProtectedRoute path="/my-shop/add-new-shop" component={AddShop} />
          <ProtectedRoute path="/my-shop/edit-shop/:id" component={EditShop} />
          <ProtectedRoute
            path="/my-shop/delete-shop/:id"
            component={DeleteShop}
          />
          <ProtectedRoute
            path="/my-shop/all-products"
            component={AllProducts}
          />
          <ProtectedRoute
            path="/my-shop/edit-product/:id"
            component={EditShopProduct}
          />
          {/* <ProtectedRoute path="/my-shop/add-new-product" component={AddProduct} />
          <ProtectedRoute
          path="/my-shop/delete-product/:id"
          component={DeleteProduct}
        /> */}
          <Route
            path="/categories/:categoryUrl"
            component={CategoryProducts}
            exact
          />

          <ProtectedRoute path="/my-profile" component={Profile} />
          <ProtectedRoute path="/edit-profile" component={EditProfile} />

          <ProtectedRoute path="/product/my-products" component={MyProducts} />
          <ProtectedRoute
            path="/product/edit-product/:id"
            component={EditProduct}
          />
          <ProtectedRoute
            path="/product/add-product"
            component={AddNewProduct}
          />

          <Route
            path="/categories/:categoryUrl/product/:id"
            component={ProductView}
          />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <ProtectedRoute path="/add-user" component={AddUser} />
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
        </Switch>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
