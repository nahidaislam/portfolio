import React from "react";

const Button = (props) => {
  return (
    <div className="button" id="contact-btn">
      <div id="circle"></div>
      <a target="_blank" rel="noopener noreferrer" href={props.href}>
        {" "}
        {props.children}
      </a>
    </div>
  );
};

export default Button;
