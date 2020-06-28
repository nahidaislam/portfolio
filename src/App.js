import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//Components
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import About from "./About/About";
import Footer from "./Footer/Footer";

import Projects from "./Project/ProjectCards";
import Cero from "./Project/Projects/Cero";
import DjTable from "./Project/Projects/DjTable";
import Disasteroid from "./Project/Projects/Disasteroid";
import ViaShare from "./Project/Projects/ViaShare";
import Parkout from "./Project/Projects/Parkout";
import Sl from "./Project/Projects/Sl";
import SaveMe from "./Project/Projects/SaveMe";
import Nobadmood from "./Project/Projects/Nobadmood";

import * as ROUTES from "./Routes/Routes";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fade: false,
    };
  }

  render() {
    return (
      <div className="app">
        <div>
          <Header />
          <TransitionGroup className="transition-group">
            <CSSTransition
              key={this.props.location.pathname}
              timeout={{ enter: 300, exit: 300 }}
              classNames="fade"
            >
              <section className="route-section">
                <Switch location={this.props.location}>
                  <Route exact path={ROUTES.Intro} component={Intro} />
                  <Route exact path={ROUTES.Projects} component={Projects} />
                  <Route exact path={ROUTES.About} component={About} />

                  <Route exact path={ROUTES.Cero} component={Cero} />
                  <Route exact path={ROUTES.ViaShare} component={ViaShare} />
                  <Route exact path={ROUTES.DjTable} component={DjTable} />
                  <Route
                    exact
                    path={ROUTES.Disasteroid}
                    component={Disasteroid}
                  />
                  <Route exact path={ROUTES.Parkout} component={Parkout} />
                  <Route exact path={ROUTES.Sl} component={Sl} />
                  <Route exact path={ROUTES.SaveMe} component={SaveMe} />
                  <Route exact path={ROUTES.Nobadmood} component={Nobadmood} />

                  <Route
                    component={() => {
                      return <Redirect to="/" />;
                    }}
                  />
                </Switch>
                <Footer />
              </section>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
