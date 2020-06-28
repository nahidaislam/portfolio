import React from "react";

const Tool = (props) => {
  return (
    <div className="sideBar">
      <li>
        <img alt={props.alt} src={props.img} className="tech-icon" />
        {props.children}
      </li>
    </div>
  );
};
export default Tool;
