import React, { Component } from "react";
import http from "../services/httpService";
import {apiUrl} from "../config.json";
import "../css/home.css";

import CarouselContainer from './CarouselContainer';
import CategoryArea from './utils/category-area';
import OfferArea from './utils/offer-area';

class Home extends Component {
  state = {};

  handleTest = async () =>{
    try{
      const {data} = await http.get(`${apiUrl}/test`);
      console.log(data);
    }catch(e){
      
    }
  }

  render() {
    return (
      
      <React.Fragment>
        <div className="container-flued">
          <div>
          <CarouselContainer />
          </div>
        </div>
      <CategoryArea />
      <OfferArea />
    </React.Fragment>
    );
  }
}

export default Home;
