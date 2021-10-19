import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import userService from "../../services/userService";
import ProfileHeader from "../utils/profileHeader"

class Signin extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
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
      <ProfileHeader titleText="قم بتسجيل حسابك الخاص"/>
      <div className="bigshop_reg_log_area section_padding_100_50">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="login_form mb-50">
                        <h5 className="mb-3">أدخل المعلومات</h5>

                        <form onSubmit={this.handleSubmit} method="post" autoComplete="off">
                            <div className="form-group">
                              {this.renderInput("email", "عنوان البريد الالكتروني:", "email")}  
                            </div>
                            <div className="form-group">
                              {this.renderInput("password", "ادخل كلمة المرور:", "password")}
                            </div>
                            {this.renderButton("تسجيل")}
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

export default Signin;
