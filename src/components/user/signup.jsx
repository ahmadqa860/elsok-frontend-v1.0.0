import React from "react";
import Joi from "joi-browser";
import userService from "../../services/userService";
import Form from "../common/form";
import ProfileHeader from "../utils/profileHeader";
import { NavLink } from "react-router-dom";

class Signup extends Form {
  state = {
    data: { email: "", password: "", password_confirmation: "" },
    errors: {},
    loading: false,
  };

  schema = {
    email: Joi.string().required().email().label("Email").error(() => {
      return {
        message: 'خطأ في ادخال البريد الالكتروني',
      };
    }),
    password: Joi.string().required().min(6).label("Password").error(() => {
      return {
        message: 'خطأ في ادخال كلمة السر',
      };
    }),
    password_confirmation: Joi.string()
      .required()
      .min(6)
      .label("confirm password").error(() => {
        return {
          message: 'اعد كتابة كلمة السر',
        };
      }),
  };

  doSubmit = async () => {
    const { data } = this.state;
    let { loading } = this.state;
    loading = true;
    try {
      this.setState({loading});
      await userService.register(data);
      window.location = "/add-user";
    } catch (ex) {
      loading = false;
      this.setState({loading});
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
    //const {loading} = this.state;
/*
    const infoNote = {
      color: "white",
      padding: "10px",
      fontFamily: "Arial"
    };*/
    return (
      <React.Fragment>
        <ProfileHeader titleText="قم بتسجيل حسابك الخاص"/>
        
      <div className="bigshop_reg_log_area section_padding_100_50">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="login_form mb-50">
                        <h5 className="mb-3">أدخل المعلومات</h5>

                        <form method="post" onSubmit={this.handleSubmit} autoComplete="off">
                            <div className="form-group">
                              {this.renderInput("email", "عنوان البريد الالكتروني:", "email")}
                            </div>
                            <div className="form-group">
                              {this.renderInput("password", "ادخل كلمة المرور:", "password")}
                            </div>
                            <div className="form-group">
                              {this.renderInput("password_confirmation","اعد كلمة المرور:","password")}  
                            </div>
                              {this.renderButton("تسجيل")}
                              <NavLink to={'/signin'} ><h5 className="mt-3">لو تم تسجيلك من قبل اضغط هنا</h5></NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Signup;
