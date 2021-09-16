import React from "react";
import Joi from "joi-browser";
import LoadingPage from "../utils/loadingPage";
import userService from "../../services/userService";
import PageHeader from "../utils/pageHeader";
import Form from "../common/form";

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
    const {loading} = this.state;

    const infoNote = {
      color: "white",
      padding: "10px",
      fontFamily: "Arial"
    };
    return (
      /*
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
      */

      <section id="signup">
        
      <div className="wrapper rounded">
          <div className="Lcontainer">
            <PageHeader titleText="قم بتسجيل حسابك الخاص" />
            {!loading && (
            <form className="Lform" onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("email", "عنوان البريد الالكتروني:", "email")}
              {this.renderInput("password", "ادخل كلمة المرور:", "password")}
              {this.renderInput(
                "password_confirmation",
                "اعد كلمة المرور:",
                "password"
              )}
              {this.renderButton("تسجيل")}

              <div className="mt-4 middleSection-Standardfont" style={infoNote}>
                <p><strong className="pl-3">ملاحظة هامة!</strong>لو تم تسجيلك في الموقع من قبل فيمكنك الضغط على أضف منتج جديد في أعلى الصفحة </p>
                <p>او اضغط هنا <a href="/add-product#addProduct">أضف منتج جديد</a></p>
              </div>
            </form>
          )}

          {loading && (<LoadingPage/>)}


          <ul className="bg-bubbles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                      </ul>
                  </div>
              </div>
          </section>
    );
  }
}

export default Signup;
