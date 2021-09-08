import React from "react";
import Joi from "joi-browser";
//import { apiUrl } from "../config.json";
import userService from "../../services/userService";
//import http from "../services/httpService";

import PageHeader from "../common/pageHeader";
import Form from "../common/form";

class Signup extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
    password_confirmation: Joi.string()
      .required()
      .min(2)
      .label("confirm password"),
  };

  doSubmit = async () => {
    const { data } = this.state;
    try {
      await userService.register(data);
      window.location = "/add-user";
    } catch (ex) {
      const { data } = ex.response;
      const errors = data.errors;
      const err = {};
      for (const error in errors) {
        err[error] = errors[error][0];
      }
      this.setState({ errors: err });

      if (ex.response && ex.response.status === 400) {
      }
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mt-4">
            <PageHeader titleText="Signup for Real App" />
          </div>
          <div className="col-12">
            <p>You can open new account for free!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("email", "Email Address", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput(
                "password_confirmation",
                "Confirm Password",
                "password"
              )}
              {this.renderButton("Signup")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
