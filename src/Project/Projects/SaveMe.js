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
import react from "../../Images/Tools/react.png";
import firebase from "../../Images/Tools/firebase.png";
import queensland from "../../Images/Tools/queensland.png";
import bing from "../../Images/Tools/bing.png";

export default class SaveMe extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <Project>
        <Title
          title="Save Me!"
          role="Role: Login system (React.js + FireBase)"
        />
        <Container>
          <Video
            title="Save Me!"
            src="https://player.vimeo.com/video/335842245"
          />
          <Section>
            <Text>
              <TextTitle textTitle="What is Save Me?" />
              <p>
                The idea behind this game is to wake an awareness about the
                planet's wildlife. By playing this game you might gain some
                knowledge about the species that are very likely to become
                extinct. According to OneKind Planet: ​<br></br>
                <q>
                  Since 1996, the Amur leopard has been classified by the IUCN
                  as Critically Endangered with less than 70 individuals thought
                  to exist today. It is hunted and killed for its beautiful fur,
                  its habitat is being destroyed for human settlement and
                  agricultural practices.
                </q>
              </p>
              <hr className="project-hr" />
              <TextTitle textTitle="How does it work?" />
              <TextTitle textsubTitle="Create account" />
              <p>
                To access the game the user needs to create an account and login
                to the system. The user can then choose the level of the game
                (easy, medium and hard). The level decides how many animals will
                be shown on the screen
              </p>
              <TextTitle textsubTitle="Order the endangered animals" />
              <p>
                The user is supposed to order the species according to their
                threatening level based on the player's previous knowledge.
                After submitting the game, the user will get to know their
                result.
              </p>
              <TextTitle textsubTitle="Other features" />
              <p>
                There are several features in this game. There is a scoreboard
                where the scores from other users are displayed. The About page
                shows a little description of the idea behind the game.
              </p>
              <hr className="project-hr" />
              <TextTitle textTitle="Tools" />
              <div className="justify-content-around tech-tool">
                <Tool alt="queensland" img={queensland}>
                  <a href=" https://www.data.qld.gov.au/dataset/qld-wildlife-data-api/resource/773bef14-91d6-4ed5-9253-0146d937b2e6?fbclid=IwAR23p7vR5IiHtBPnWkmpKvixfYfvFkC9fb43PTDmcSC03I7Lmc0H_bY6C-E">
                    Queensland Government API
                  </a>
                </Tool>
                <Tool alt="bing" img={bing}>
                  <a href=" https://azure.microsoft.com/en-us/services/cognitive-services/bing-image-search-api/">
                    Bing Image
                  </a>
                </Tool>
                <Tool alt="react" img={react}>
                  React.js
                </Tool>
                <Tool alt="firebase" img={firebase}>
                  Firebase
                </Tool>
              </div>
              <hr className="project-hr" />
              <p>
                Project members: Camille Fournier, Haozhou Zhang, Nahida Islam
                and Ziling Li.
              </p>
              <div className="row m-0 p-0 justify-content-around">
                <Button href="https://github.com/arquLV/Disasteroid">
                  Github
                </Button>
                <Button href="https://www.kth.se/social/course/DH2642/">
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
