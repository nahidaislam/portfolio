import React, { Component } from "react";

//CSS
import "./Project.css";

// Components
import Title from "../Components/Title";
import TextTitle from "../Components/TextTitle";
import Project from "../Components/Project";
import Text from "../Components/Text";
import Section from "../Components/Section";
import Container from "../Components/Container";
import Button from "../Components/Button";
import Video from "../Components/Video";
import Tool from "../Components/Tool";

import sketch from "../../Images/Tools/sketch.png";

export default class Sl extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <Project>
        <Title title="SL: Station Map" role="Role: Designer" />
        <Container>
          <Video
            title="SL: Station Map"
            src="https://player.vimeo.com/video/310948255"
          />
          <Section>
            <Text>
              <TextTitle textTitle="What is SL: Station Map?" />
              <p>
                Subway is one of the most common transit systems in Stockholm,
                Sweden. It’s an easy medium to travel by and is available all
                throughout the city. Suppose you go to a destination where
                you’ve never been before. You get off the subway and discover
                two exits in two opposite directions. You have a hard time
                deciding which exit to take to reach your destination in the
                shortest amount of time. <br></br>
                ​SL: Station Map is a prototype of an additional feature to SL:
                Journey planner and tickets. This feature allows you to search
                your journey by typing your current destination and your desired
                destination. By clicking on the station name you can access the
                map of the station. The map will direct you through the route
                that you should take to reach your destination in the shortest
                amount of time.
              </p>
              <hr className="project-hr" />
              <TextTitle textTitle="Tool" />
              <Tool alt="sketch" img={sketch}>
                Sketch
              </Tool>
              <hr className="project-hr" />
              <p>
                Project members: Eldar Zeynalli, Filip Bäck, Lukas Finnveden,
                Nahida Islam, Oliver Lillberg.
              </p>
              <div className="row m-0 p-0 justify-content-around">
                <Button href="https://www.kth.se/social/course/DH1620/">
                  Course
                </Button>
              </div>
            </Text>
          </Section>
        </Container>
      </Project>
    );
  }
}
