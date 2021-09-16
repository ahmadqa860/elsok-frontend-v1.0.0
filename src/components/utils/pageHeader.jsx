import React from "react";

const PageHeader = ({ titleText }) => {
  return (
    <div className="row">
      <div className="col-12 mt-4">
        <h2 className="text-orange mt-0 Lemonada-font">{titleText}</h2>
      </div>
    </div>
  );
};

export default PageHeader;
