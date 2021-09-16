import React from "react";
import Loader  from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PageHeader from "./pageHeader";

const LoadingPage = () => {
  return (
    <React.Fragment>
      <PageHeader titleText="جاري التحميل" />
      <Loader
          type="Oval"
          color="#d78520"
          height={150}
          width={150}
          timeout={0} 
        />
    </React.Fragment>
  );
};

export default LoadingPage;
