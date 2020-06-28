import React from "react";

const Title = (props) => {
  return (
    <div className="projectTitle">
      <h1>{props.title}</h1>
      <p>{props.role}</p>
    </div>
  );
};
export default Title;
