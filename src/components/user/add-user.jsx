import React from "react";
import Joi from "joi-browser";
import userService from "../../services/userService";
import {apiUrl} from "../../config.json";
import http from "../../services/httpService";
import Form from "../common/form";
import ProfileHeader from "../utils/profileHeader";

class AddUser extends Form {
  state = {
    data: { name: "", mobile: "", address: "", city_id: "" },
    userType: "3",
    cities: [],
    errors: {},
    loading: false,
  };

  schema = {
    city_id: Joi.required().label("المدينة").error(() => {
      return {
        message: 'عليك أختيار التصنيف',
      };
    }),
    name: Joi.string().required().label("الاسم").error(() => {
      return {
        message: 'عليك ادخال الأسم',
      };
    }),
    mobile: Joi.number().required().label("الهاتف").error(() => {
      return {
        message: 'خطأ في أدخال الهاتف',
      };
    }),
    address: Joi.string().required().label("العنوان").error(() => {
      return {
        message: 'عليك ادخال العنوان',
      };
    }),
  };

  async componentDidMount(){
    const {data}  = await http.get(`${apiUrl}/cities`);
    this.setState({cities:data});
  }

  handleSelect = (event) => {
    const {data} = this.state;
    data.city_id = event.target.value;
    this.setState({ data });
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { userType } = this.state;
      let { loading } = this.state;
      loading = true;
      this.setState({loading});
      console.log(userType);
      try{
        await userService.registerUser(data, userType);
        this.props.history.replace("/dashboard");

      }catch(ex){
        
      }
    } 
      catch (ex) {
      const { data } = ex.response;
      const errors = data.errors;
      const err = {};
      for (const error in errors) {
        err[error] = errors[error][0];
      }
      this.setState({ errors: err });
    }
  };

  render() {
    //const {loading} = this.state;
    const {cities} = this.state;
    return (

      <React.Fragment>  
        <ProfileHeader titleText="قم بتسجيل حسابك الخاص" />
      <div className="bigshop_reg_log_area section_padding_100_50">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="login_form mb-50">
                        <h5 className="mb-3">أدخل المعلومات</h5>

                        <form method="post" onSubmit={this.handleSubmit} autoComplete="off">
                          {this.renderInput("name", "الأسم الكامل")}
                          {this.renderInput("mobile", "رقم الهاتف")}
                          <div className="form-group">
                            <label>أختار البلد</label>
                            <select
                              name="city_id"
                              id="city_id"
                              className="custom-select"
                              onChange={this.handleSelect}
                            >
                              <option defaultValue="">أختار التصنيف</option> 
                                {cities.map((city)=>(
                                  <option key={city.id} value={city._id}>{city.arb_name}</option> 
                                ))} 
                            </select>
                          </div>
                          {this.renderInput("address", "العنوان")}
                          {this.renderButton("أكمل")}
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

export default AddUser;
