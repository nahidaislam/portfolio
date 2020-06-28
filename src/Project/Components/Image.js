import React from "react";

const Image = (props) => {
  return (
    <div className="col-md-8 mx-auto py-2">
      <img src={props.img} alt={props.alt} className="img-fluid" />
    </div>
  );
};

export default Image;
