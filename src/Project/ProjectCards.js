import React from "react";

/*Components*/
import Card from "./Card";
import PageHeader from "../PageHeader/PageHeader";

/*Images*/
import dj from "../Images/ProjectCards/DJTable.jpg";
import disasteroid from "../Images/ProjectCards/Disasteroid.jpg";
import viashare from "../Images/ProjectCards/ViaShare.jpg";
import sl from "../Images/ProjectCards/SL.jpg";
import saveMe from "../Images/ProjectCards/SaveMe.jpg";
import parkout from "../Images/ProjectCards/Parkout.jpg";
import affect from "../Images/ProjectCards/affectRecognition.jpg";
import cero from "../Images/ProjectCards/cero.jpg";

import * as ROUTES from "../Routes/Routes";

/*CSS*/
import "./ProjectCards.css";

export default class ProjectCards extends React.Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <section id="projects">
        <div className="container">
          <PageHeader title="Projects" />
          <div className="main-container">
            <div className="d-flex justify-content-start flex-wrap m-0 p-0">
              <Card
                imgsrc={cero}
                title="CERO Simulation tool"
                alt="cero"
                link={ROUTES.Cero}
                description="UX Design"
              />
              <Card
                imgsrc={dj}
                title="DJTable"
                alt="DJTable"
                link={ROUTES.DjTable}
                description="Tabletop game"
              />
              <Card
                imgsrc={disasteroid}
                title="Disasteroid"
                alt="Disasteroid"
                link={ROUTES.Disasteroid}
                description="AR game"
              />
              <Card
                imgsrc={viashare}
                title="The ViaShare"
                alt="The ViaShare"
                link={ROUTES.ViaShare}
                description="Design"
              />
              <Card
                imgsrc={parkout}
                title="Parkout"
                alt="Parkout"
                link={ROUTES.Parkout}
                description="Mobile application/ Design"
              />

              <Card
                imgsrc={sl}
                title="SL: Station Map"
                alt="SL: Station Map"
                link={ROUTES.Sl}
                description="Design"
              />
              <Card
                imgsrc={saveMe}
                title="SaveMe!"
                alt="SaveMe!"
                link={ROUTES.SaveMe}
                description="Web game"
              />
              <Card
                imgsrc={affect}
                title="No more bad moods"
                alt="No more bad moods"
                link={ROUTES.Nobadmood}
                description="Multimodality"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
