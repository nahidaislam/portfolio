import React from "react";

// CSS
import "./PageHeader.css";

const PageHeader = (props) => {
  return (
    <div className="col-md-4">
      <div className="pageHeader">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
