import React from "react";
import http from "../../services/httpService";
import { apiUrl } from "../../config.json";
import Form from "../common/form";
import ProfileSidebar from '../utils/profileSidebar';
import ProfileHeader from '../utils/profileHeader';

class Profile extends Form {
  state = {
    data: {
      name: "",
      mobile: "",
      address: "",
    },
    errors: {},
  };

  async componentDidMount(){
      const { data } = await http.get(`${apiUrl}/user/profile`);
      this.setState({data});
  }

  render() {
    
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

                            <form action="#" method="post">
                                <div className="row">
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
                                        <button type="submit" className="btn btn-primary">Save Changes</button>
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
