import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import userService from "../../services/userService";
import { Link } from "react-router-dom";

class Signin extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    const { email, password } = this.state.data;
    try {
      await userService.login(email, password);
      window.location = "/";
    } catch (ex) {}
  };

  render() {
    return (
      <React.Fragment> 
      <div className="breadcumb_area">
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-12">
                    <h5>Login &amp; Register</h5>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active">Login &amp; Register</li>
                    </ol>
                </div>
            </div>
        </div>
      </div>
      <div className="bigshop_reg_log_area section_padding_100_50">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="login_form mb-50">
                        <h5 className="mb-3">Login</h5>

                        <form onSubmit={this.handleSubmit} method="post" autoComplete="off">
                            <div className="form-group">
                              {this.renderInput("email", "Email", "email")}
                            </div>
                            <div className="form-group">
                              {this.renderInput("password", "Password", "password")}
                            </div>
                            <div className="form-check">
                                <div className="custom-control custom-checkbox mb-3 pl-1">
                                    <input type="checkbox" className="custom-control-input" id="customChe"/>
                                    <label className="custom-control-label" htmlFor="customChe">Remember me for this computer</label>
                                </div>
                            </div>
                            {this.renderButton("Signin")}
                        </form>
                        
                        <div className="forget_pass mt-15">
                            <Link to="/">Forget Password?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </React.Fragment>
    );
  }
}

export default Signin;
