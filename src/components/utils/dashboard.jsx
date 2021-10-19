import React, { Component } from "react";
import http from "../../services/httpService";
import { apiUrl } from "../../config.json";
import ProfileSidebar from './profileSidebar';
import ProfileHeader from './profileHeader';

class Dashboard extends Component {
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
        <ProfileHeader titleText="الحساب الخاص بك"/>
        <section className="my-account-area section_padding_100_50">
            <div className="container">
                <div className="row">
                    <ProfileSidebar />
                    <div className="col-12 col-lg-9">
                        <div className="my-account-content mb-50">
                            <h5 className="mb-3">أهلا بك عزيزي المستخدم في موقع السوق< br/> انت في أول أصدار من موقع السوق, الموقع موجود لخدمتك أستعمله بكل أمانة, سيتم تحديث الموقع بأستمرار واتاحة مميزات جديدة لك فدعمك لنا مهم <br/>مع تحيات فريق السوق </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Dashboard;
