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

//Images
import unity from "../../Images/Tools/unity.png";
import affectiva from "../../Images/Tools/affectiva.png";

export default class Nobadmood extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <Project>
        <Title
          title="No more bad moods!"
          role="Role: Unity interface developer + user testing"
        />
        <Container>
          <Video
            title="No more bad moods"
            src="https://player.vimeo.com/video/310178566"
          />
          <Section>
            <Text>
              <TextTitle textTitle="What is No more bad moods?" />
              <p>
                The main idea behind this project was to detect the emotions of
                a person from their facial expression and, thereafter, give
                feedback through music to the person. The feedback was sent in
                the form of music because music can affect a person’s emotional
                state. Detecting human emotions can be helpful information for
                many different reasons. More specifically, detecting a person’s
                emotional state can be helpful in multimodal interaction. For
                instance, by detecting the user's emotional state it can
                personalize a smart device, as cheering the user up when
                detecting that the user is sad.
              </p>
              <hr className="project-hr" />
              <TextTitle textTitle="How does it work?" />
              <TextTitle textsubTitle="SDK" />
              <p>
                The multimodal interaction was developed on a laptop. For the
                input of the interaction, a webcam was used to detect the facial
                expression of the user. An SDK was implemented to classify the
                emotional states. The SDK was a older version of Emotion SDK
                from Affectiva.
              </p>

              <TextTitle textsubTitle="Unity" />
              <p>
                The aim was that the interface would detect the emotional states
                of happy, sad and angry. The SDK was imported and handled in
                Unity. Unity was chosen because of the wide range of plugins and
                a simple user interface to work in.
              </p>
              <TextTitle textsubTitle="Sound" />
              <p>
                Sound was implemented as the output of the multimodal
                interaction. More specifically it was music adapted to the
                detected user’s facial expression and their emotional state.
                When the facial expression recognition detected an angry user,
                calm music was played to try to change the emotional state of
                the user to harmonious.
              </p>
              <hr className="project-hr" />
              <TextTitle textTitle="Tools" />
              <div className="justify-content-around tech-tool">
                <Tool alt="unity" img={unity}>
                  Unity
                </Tool>
                <Tool alt="affectiva" img={affectiva}>
                  Affectiva SDK
                </Tool>
              </div>
              <hr className="project-hr" />
              <p>
                Project members: Leila Englund, Nahida Islam, Rebecka Möller and
                Vishwas Vasudev Devagiri.
              </p>
              <div className="row m-0 p-0 justify-content-around">
                <Button href="https://www.kth.se/social/course/DT2140/">
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
