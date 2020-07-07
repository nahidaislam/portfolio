import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Components
import Title from "../Components/Title";
import TextTitle from "../Components/TextTitle";
import Project from "../Components/Project";
import Text from "../Components/Text";
import Section from "../Components/Section";
import Container from "../Components/Container";
import Button from "../Components/Button";
import Tool from "../Components/Tool";

//Images
import img1 from "../../Images/Projects/Cero/img1.png";
import img2 from "../../Images/Projects/Cero/img2.png";
import img3 from "../../Images/Projects/Cero/img3.png";
import img4 from "../../Images/Projects/Cero/img4.png";
import img5 from "../../Images/Projects/Cero/img5.png";
import img6 from "../../Images/Projects/Cero/img6.png";
import img7 from "../../Images/Projects/Cero/img7.png";
import img8 from "../../Images/Projects/Cero/img8.png";

//Image
import figma from "../../Images/Tools/figma.png";

export default class Cero extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <Project>
        <Title
          title="Cero simulation tool"
          role="Role: UX designer (Master's thesis project)"
        />
        <Container>
          <Section>
            <Text>
              <div className="carousel-wrapper">
                <Carousel infiniteLoop useKeyboardArrows>
                  <div className="carousel-image">
                    <img src={img1} alt="Cero" />
                  </div>
                  <div className="carousel-image">
                    <img src={img2} alt="Choose friends" />
                  </div>
                  <div className="carousel-image">
                    <img src={img3} alt="Choose time" />
                  </div>
                  <div className="carousel-image">
                    <img src={img4} alt="plan" />
                  </div>
                  <div className="carousel-image">
                    <img src={img5} alt="Share on facebook" />
                  </div>
                  <div className="carousel-image">
                    <img src={img6} alt="You joined" />
                  </div>
                  <div className="carousel-image">
                    <img src={img7} alt="Enjoy the episode" />
                  </div>
                  <div className="carousel-image">
                    <img src={img8} alt="Enjoy the episode" />
                  </div>
                </Carousel>
              </div>
              <TextTitle textTitle="What is The Cero simulation tool?" />
              <p>
                The CERO simulation tool is used by{" "}
                <a href="https://cero.nu/">CERO</a> (Climate and Economic
                Research in Organizations) organization, whose purpose is to
                help organizations find economically sustainable strategies to
                achieve set climate goals for travel. The CERO simulation tool
                is used as a support during workshops held by CERO experts.
              </p>
              <p>
                The tool will soon be implemented in real life, based on the
                recommendations collected during the master's thesis work.
              </p>

              <hr className="project-hr" />
              <TextTitle textTitle="Tool" />
              <Tool alt="figma" img={figma}>
                Figma
              </Tool>
              <hr className="project-hr" />

              <div className="row m-0 p-0 justify-content-around">
                <Button href="https://www.figma.com/proto/xsvmolHIFKxdxuHchYEdar/CERO?node-id=397%3A16721&scaling=contain">
                  Prototype
                </Button>
                <Button href="https://cero.nu/">CERO</Button>
              </div>
            </Text>
          </Section>
        </Container>
      </Project>
    );
  }
}
