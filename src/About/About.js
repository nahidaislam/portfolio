import React, { Component } from "react";

/*Component*/
import Button from "../Project/Components/Button";

/*Image*/
import aboutme from "../Images/ProfilePicture/aboutme.JPG";

/*CSS*/
import "./About.css";

export default class About extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="main-container">
            <div className="row px-3 justify-content-center about">
              <div className="col-md-6 aboutText">
                <h2 className="mt-3 m-md-0 unicorn">Hello there!</h2>
                <p className="justify">
                  I'm Nahida Islam. A highly motivated IT professional with
                  experience working on several programming projects and
                  applications, during a 5-year IT education with a master's
                  degree in Interactive Media Technology at the Royal Institute
                  of Technology (KTH) in Stockholm, Sweden. I have a passion for
                  visual media and web development and spend a lot of time
                  learning these topics not just in school, but also in my spare
                  time. I am a creative person who likes to express my creative
                  side through photography, art and makeup.
                </p>
                <p className="justify">
                  I possess a wide range of skills related to media technology,
                  human-computer interaction and user experience (UX). During my
                  time at KTH, I have had worked with several different
                  projects, for instance, research-oriented projects, web
                  development, and software development projects.
                </p>
                <p className="justify">
                  Thank you for visiting my portfolio, feel free to check out my
                  work and do not hesitate to contact me if you want to
                  collaborate or ask a question.
                </p>
                <div className="row m-0 p-0 justify-content-around">
                  <Button href="mailto:nahida_1994@hotmail.com">
                    Get in touch
                  </Button>
                </div>
              </div>
              <div className=" aboutme col-md-4">
                <img src={aboutme} className=" img-fluid " alt="Nahdia Islam" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
