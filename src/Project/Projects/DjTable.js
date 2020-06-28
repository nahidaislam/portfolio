import React, { Component } from "react";

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

//Image
import unity from "../../Images/Tools/unity.png";
import fmod from "../../Images/Tools/fmod.png";
import blender from "../../Images/Tools/blender.png";
import ableton from "../../Images/Tools/ableton.png";

export default class DjTable extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <Project>
        <Title
          title="DjTable"
          role="Role: Graphics Lead + 3D objects creator"
        />
        <Container>
          <Video
            title="DjTable"
            src="https://player.vimeo.com/video/384009251?title=0&byline=0&portrait=0"
          />
          <Section>
            <Text>
              <TextTitle textTitle="What is DjTable?" />
              <p>
                The goal of DJTable is to create a collaborative tabletop music
                experience for users through soothing music and synesthetic
                visual graphics. Music has been proposed as psychological
                support for patients with low- and medium-grade depression.
                Therefore, the motivation of DJTable is to enable music creation
                even for people who cannot play any instruments.
              </p>
              <hr className="project-hr" />
              <TextTitle textTitle="How does it work?" />
              <TextTitle textsubTitle="Graphics" />
              <p>
                DJTable is an abstract themed experience. The graphics are
                consist of two parts: <br></br>
                a) Each physical object on the table has its visual effects. A
                dial circle is shown that represents four different tracks of an
                instrument. At a specific distance between two or several
                objects, an exploding effect is shown which represents the fifth
                track. <br></br>
                b) A standalone space-themed visual experience is presented for
                the audience. The visual integrates with the music and creates
                pleasing visual experience.
              </p>
              <TextTitle textsubTitle="Interaction" />
              <p>
                The interaction with the tabletop is done through physical
                objects, i.e. fiducials. Each of the fiducials represents a
                specific instrument. A trackable tag is attached underneath.
              </p>
              <TextTitle textsubTitle="3D Models" />
              <p>
                To create a representation of each instrument, 3D physical
                objects are printed. The final shape of these physical objects
                was decided according to the result of a survey that was posted
                on the course Facebook group.
              </p>
              <hr className="project-hr" />
              <TextTitle textTitle="Tools" />
              <div className="justify-content-around tech-tool">
                <Tool alt="unity" img={unity}>
                  Unity
                </Tool>
                <Tool alt="fmod" img={fmod}>
                  Fmod
                </Tool>
                <Tool alt="blender" img={blender}>
                  Blender
                </Tool>
                <Tool alt="ableton" img={ableton}>
                  Ableton
                </Tool>
              </div>

              <hr className="project-hr" />
              <p>
                Project members: Arturs Kurzemnieks, Augustin Bariant, Miguel
                Alvarez Bordils, Nahida Islam and Tingyi Li.
              </p>
              <div className="row m-0 p-0 justify-content-around">
                <Button href="http://djtable.fun/">Website</Button>
                <Button href="https://github.com/AugustinBariant/DJTable">
                  Github
                </Button>

                <Button href="https://www.kth.se/social/course/DH2413/">
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
