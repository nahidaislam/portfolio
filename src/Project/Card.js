import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="col-md-4 col-sm-6 col-12 p-3">
      <div className="portfolio_item">
        <Link to={props.link}>
          <img src={props.imgsrc} alt={props.alt} className="img-fluid" />
          <div className="portfolio_item_hover">
            <div className="item_info p-6">
              <span>{props.title}</span>
              <em>{props.description}</em>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Card;
