import React from "react";

const TextTitle = (props) => {
  return (
    <div className="top-bar">
      <h2>{props.textTitle}</h2>
      <h3>{props.textsubTitle}</h3>
    </div>
  );
};
export default TextTitle;
