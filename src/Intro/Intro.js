import React, { Component } from "react";

//Icon
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

/*CSS*/
import "./Intro.css";

const SocialMedia = (props) => {
  return (
    <ul className="social-ul m-0 p-0 d-flex justify-content-center">
      <li className={"box-social " + props.margin}>
        <a href="https://github.com/nahidaislam">
          <FaGithubSquare className="social-media-fill" size="30px" />
        </a>
      </li>
      <li className={"box-social " + props.margin}>
        <a href="https://www.linkedin.com/in/nahida-islam/">
          <FaLinkedin className="social-media-fill" size="30px" />
        </a>
      </li>
    </ul>
  );
};

export default class Intro extends Component {
  render() {
    return (
      <section id="home" className="container-fluid p-0">
        <div className="container profile height-100 align-items-center d-flex">
          <div className="row home-content col-lg-11 mx-auto">
            <div className="col-md-6">
              {/* <h3 className="mt-3 m-md-0">&#8212; Nahida Islam</h3> */}
            </div>
            <div className="col-md-6">
              <div className="introText">
                <h3 className="mt-3 m-md-0">&#8212; Nahida Islam</h3>
                <h2 className="mt-3 m-md-0 text2">
                  A UX enthusiast<br></br>with programming experience
                </h2>
                <SocialMedia margin="m-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
