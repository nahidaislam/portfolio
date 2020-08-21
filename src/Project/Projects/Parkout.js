import React, { Component } from "react";

// Components
import Title from "../Components/Title";
import TextTitle from "../Components/TextTitle";
import Project from "../Components/Project";
import Text from "../Components/Text";
import Section from "../Components/Section";
import Container from "../Components/Container";
import Button from "../Components/Button";
import Image from "../Components/Image";
import Tool from "../Components/Tool";

//Images
import img1 from "../../Images/Projects/Parkout/img1.png";
import onsen from "../../Images/Tools/onsen.png";
import html from "../../Images/Tools/html.png";
import css from "../../Images/Tools/css.png";
import js from "../../Images/Tools/js.png";
import maps from "../../Images/Tools/maps.png";
import angular from "../../Images/Tools/angular.png";

export default class Parkout extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <Project>
        <Title title="Parkout" role="Role: Map development (JavaScript)" />
        <Container>
          <Image img={img1} alt="Change Detection Test" />
          <Section>
            <Text>
              <TextTitle textTitle="What is Parkout?" />
              <p>
                The park comes alive during the summer in Sweden, a lovely
                meeting place for fun with his family and/or friends. Therefore,
                an idea came with an app called Parkout, which is a mobile
                application optimized for hanging out on a park on a beautiful
                summer day.
              </p>
              <hr className="project-hr" />
              <TextTitle textTitle="How does it work?" />
              <TextTitle textsubTitle="Home page" />
              <p>
                The home page is a map showing nearby parks along the user's
                current position with a bouncing mark.
              </p>
              <TextTitle textsubTitle="InstaParkout" />
              <p>
                If the user wants to reach to the nearest park directly, you can
                use the "Instaparkout" button to see directions to the location.
              </p>
              <TextTitle textsubTitle="Chat" />
              <p>
                The second tab is designed for an anonymous chat room where the
                user's location (nearest park) is used as your username. The
                goal with the chat forum is to inform other about ongoing events
                in parks, giving tips, asking for help or for example to make
                contact with each other. If someone grills and has forgotten the
                ketchup, you can ask people in the park if they have the
                opportunity to borrow. The chat simply facilitates people going
                to a park or hanging in a park.
              </p>
              <hr className="project-hr" />
              <TextTitle textTitle="Bugs" />
              <p>
                The current version of this mobile app has some bugs. To be able
                to use the Onsen UI framework, the JavaScript features needed to
                rewrite to AngularJS. After rewriting the Google Maps built-in
                zoom-out button does not work whereas the zoom-in button works
                flawlessly.
                <br></br> The second bug was found when the app was opened from
                Chrome on an Android mobile. The chat box on Android mobiles
                does not look properly, nor does it go up with the keyboard when
                you want to write something. <br></br>There are two weaknesses
                when it comes to the chat function. The chat-function is not
                bug-free and does not work as it should. Another problem is that
                no database for saving the chat is implemented. The idea was
                that when the user opens the chat tab, messages from different
                parks will be displayed.
              </p>
              <hr className="project-hr" />
              <TextTitle textTitle="Tools" />

              <div className="justify-content-around tech-tool">
                <Tool alt="onsen" img={onsen}>
                  Onsen UI
                </Tool>

                <Tool alt="html" img={html}>
                  HTML
                </Tool>
                <Tool alt="css" img={css}>
                  CSS
                </Tool>
                <Tool alt="js" img={js}>
                  JS
                </Tool>
                <Tool alt="maps" img={maps}>
                  Google Maps
                </Tool>
                <Tool alt="angular" img={angular}>
                  AngularJS
                </Tool>
              </div>
              <hr className="project-hr" />
              <p>
                Project members: Emil Erlandsson, Emilia Sjögren Larsson, Felix
                Dimberg and Nahida Islam.
              </p>
              <div className="row m-0 p-0 justify-content-around">
                <Button href="https://www.behance.net/gallery/102203109/ParkOut">
                  Prototype
                </Button>
                <Button href="https://github.com/nahidaislam/Mobile-Development-with-Web-Technologies-DM2518/tree/master/Parkout-App">
                  Github
                </Button>
                <Button href="https://www.kth.se/social/course/DM2518/">
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
