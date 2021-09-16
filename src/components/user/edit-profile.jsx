import React from "react";
import http from "../../services/httpService";
import { apiUrl } from "../../config.json";
import Form from '../common/form';
import ProfileSidebar from '../utils/profileSidebar';
import ProfileHeader from '../utils/profileHeader';
import Joi from "joi-browser";

class Profile extends Form {
  state = {
    data: {
      id: "",
      name: "",
      mobile: "",
      address: "",
      citie_id: "",
      identity: null,
    },
    cities: [],
    errors: {},
  };

  async componentDidMount(){
      var { data } = await http.get(`${apiUrl}/user/profile`);
      console.log(data);
      this.setState({data});
      var {data}  = await http.get(`${apiUrl}/cities`);
      this.setState({cities:data});
  }

  schema={
    name: Joi.string().required().label("Name").error(() => {
        return {
          message: 'خطأ في أدخال الأسم',
        };
      }),
    mobile: Joi.string().required().label("Mobile").error(() => {
        return {
          message: 'خطأ في ادخال الجوال',
        };
      }),
    address: Joi.string().required().label("Address").error(() => {
        return {
          message: 'خطأ في ادخال العنوان',
        };
      }),
    citie_id: Joi.string().required().label("City").error(() => {
        return {
          message: "أختر البلد",
        };
      }),
    identity: Joi.string().allow(null),
    id: Joi.empty(''),
    };

    doSubmit = async () => {
        var {data} = this.state;
        console.log(data);
        console.log("work");
        try{
          await http.put(`${apiUrl}/user/profile/${data.id}`,data);

        }catch(ex){
          console.log(ex);
        }
      }
    handleSelect = (event) => {
      const {data} = this.state;
      data.citie_id = event.target.value;
      this.setState({ data });
    };
  

  render() {
    const {cities} = this.state;
    const {errors} = this.state;
    console.log(errors);
    return (
      <React.Fragment>
        <ProfileHeader />
        <section className="my-account-area section_padding_100_50">
            <div className="container">
                <div className="row">
                    <ProfileSidebar />
                    <div className="col-12 col-lg-9">
                        <div className="my-account-content mb-50">
                            <h5 className="mb-3">Account Details</h5>

                            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
                              <div className="row">
                                  <div className="form-group">
                                  <label>أختار البلد</label>
                                  <select
                                    name="city_id"
                                    id="city_id"
                                    className="custom-select"
                                    onChange={this.handleSelect}
                                  >
                                  <option defaultValue="">أختار التصنيف</option>
                                  
                                  {cities &&
                                  cities.map((city)=>(
                                    <option key={city.id} value={city._id}>{city.arb_name}</option> 
                                    )) 
                                  }
                                  </select>
                              </div>

                                    <div className="col-12">
                                        <div className="form-group">
                                            {this.renderInput("name", "الأسم الكامل *")}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                        {this.renderInput("mobile", "رقم الجوال *")}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                        {this.renderInput("address", "العنوان *")}
                                        </div>
                                    </div>
                                    
                                    <div className="col-12">
                                        {this.renderButton("Save changes")}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Profile;
