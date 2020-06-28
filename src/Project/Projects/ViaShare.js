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
import img1 from "../../Images/Projects/ViaShare/img1.png";
import img2 from "../../Images/Projects/ViaShare/img2.png";
import img3 from "../../Images/Projects/ViaShare/img3.png";
import img4 from "../../Images/Projects/ViaShare/img4.png";
import img5 from "../../Images/Projects/ViaShare/img5.png";
import img6 from "../../Images/Projects/ViaShare/img6.png";
import img7 from "../../Images/Projects/ViaShare/img7.png";

//Image
import figma from "../../Images/Tools/figma.png";

export default class ViaShare extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <Project>
        <Title title="The ViaShare" role="Role: Share function designer" />
        <Container>
          <Section>
            <Text>
              <div className="carousel-wrapper">
                <Carousel infiniteLoop useKeyboardArrows>
                  <div className="carousel-image">
                    <img src={img1} alt="viashare" />
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
                </Carousel>
              </div>
              <TextTitle textTitle="What is The ViaShare?" />
              <p>
                The ViaShare is a social feature on the streaming service
                Viafree that can be used to watch your favorite programs
                together with your friends or family. This feature enables you
                to invite your loved ones who are living far away from you. Just
                with a click, you can plan when you would like to watch a
                program together. The feature is integrated with the Facebook
                messenger to simplify the communication. Through the ViaShare
                feature, you can now hang out with your loved ones more often.
              </p>
              <hr className=" project-hr" />
              <TextTitle textTitle="How does it work?" />
              <TextTitle textsubTitle="The social feature" />
              <p>
                The ViaShare feature is implemented in every episode of a
                program on Viafree. By clicking on the ViaShare button you get
                access to your Facebook friends list. You have the possibility
                to select either a specific friend or several friends with whom
                you would like to watch a program. After selecting your desired
                friend/s you can set up a date and a time. Last but not least,
                you get a preview on all of your previous selection and the
                option to write a message. Last but not least, click the Send
                button and your invitation is successfully sent!
              </p>
              <TextTitle textsubTitle="Simplify the communication" />
              <p>
                The invitation will be sent as a link on Facebook Messenger. The
                invited user will get the invitation as a message. The user will
                then get a choice of accepting or declining the invitation. If
                the invitation gets accepted - a link to the episode will
                appear. The user will get an additional notification with the
                link 30 minutes before the planned event. The message will be
                sent in a group message if a group is invited.
              </p>
              <TextTitle textsubTitle="Establish the plan" />
              <p>
                Now it’s time to watch the program together. The feature enables
                you to watch the program at the same time. You can even talk to
                and/or see each other. The person who sent the invitation is in
                control of the remote. In other words, the person is in control
                of playing and pausing the program. In the video player, all
                participants can see who is logged in.
              </p>
              <hr className="project-hr" />
              <TextTitle textTitle="Tool" />
              <Tool alt="figma" img={figma}>
                Figma
              </Tool>
              <hr className="project-hr" />
              <p>
                Project members: Leila Englund, Nahida Islam and Rebecka Möller
              </p>
              <div className="row m-0 p-0 justify-content-around">
                <Button href="https://www.figma.com/proto/ety8OASWvS22SnMuk6GoEobg/Share-function?node-id=327%3A7359&scaling=min-zoom">
                  Prototype
                </Button>
                <Button href="https://www.kth.se/social/course/DM2601/">
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
