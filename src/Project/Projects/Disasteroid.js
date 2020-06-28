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

//Image
import unity from "../../Images/Tools/unity.png";
import blender from "../../Images/Tools/blender.png";
import arcore from "../../Images/Tools/arcore.png";

export default class Disasteroid extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <Project>
        <Title title="Disasteroid" role="Role: Graphics Lead" />
        <Container>
          <Video
            title="Disasteroid"
            src="https://player.vimeo.com/video/382895194?title=0&byline=0&portrait=0"
          />
          <Section>
            <Text>
              <TextTitle textTitle="What is Disasteroid?" />
              <p>
                The goal of Disasteroid is to make fun dark humor themed
                collaborative AR game. The game involves the player to save the
                earth from asteroids using missiles and a special weapon.
                Creating missiles and the special weapon involves using
                resources from the earth. The player, therefore, has to deal
                with the dilemma of whether or not they are actually saving the
                earth.
              </p>
              <hr className="project-hr" />
              <TextTitle textTitle="How does it work?" />
              <TextTitle textsubTitle="Graphics" />
              <p>
                Disasteroid is an earth-based game. It involves low poly earth.
                The earth is painted according to a vegetation map to give the
                player information about the population density. The player can
                then try to deflect the asteroids in a less dense area.
              </p>
              <TextTitle textsubTitle="Interaction" />
              <p>
                The game is supported on Android 7.0 'Nougat' (API Level 24) or
                higher. The game is meant to be played by multiple people
                working as a team. An image based marker as a single source of
                truth for all players was used to avoid any pre-mapping of the
                playing environment before every game session. Using Photon
                networking package for Unity with smart compensation for any lag
                in the network, smooth and synchronized asteroid motion, impacts
                and player interactions are achieved, allowing for a truly
                immersive real-time multiplayer experience in AR on a whole room
                scale.
              </p>
              <TextTitle textsubTitle="3D Models" />
              <p>
                A satellite with a gun on top of it was 3D printed to represent
                the special weapon. A image was attached to it in order to be
                able to track the satellite on the AR scene.
              </p>
              <hr className="project-hr" />
              <TextTitle textTitle="Tools" />
              <div className=" justify-content-around tech-tool">
                <Tool alt="unity" img={unity}>
                  Unity
                </Tool>
                <Tool alt="arcore" img={arcore}>
                  ArCore
                </Tool>
                <Tool alt="blender" img={blender}>
                  Blender
                </Tool>
              </div>
              <hr className="project-hr" />
              <p>
                Project members: Arturs Kurzemnieks, Augustin Bariant, Miguel
                Alvarez Bordils, Nahida Islam and Tingyi Li.
              </p>
              <div className="row m-0 p-0 justify-content-around">
                <Button href="https://disasteroid.netlify.app/">Website</Button>
                <Button href="https://github.com/arquLV/Disasteroid">
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
