import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import * as ROUTES from "../Routes/Routes";
import logo from "../Images/ProfilePicture/logo.png";

/*CSS*/
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }

  menuOpen = () => {
    const open = this.state.menuOpen;

    this.setState({ menuOpen: !open });
  };

  render() {
    const open = this.state.menuOpen;
    const home = this.props.home;

    return (
      <header id="navigation">
        <div data-open={open} className="header">
          <div className="logo-header">
            <Link to={ROUTES.Intro}>
              <img
                src={logo}
                className="logo"
                alt="Nahdia Islam"
                data-ishome={home}
                data-isclicked={open}
              />
            </Link>
          </div>
          <nav className="desktop-nav">
            <ul className="desktop-nav-list" data-ishome={home}>
              <li className="px-2 mx-2">
                <Link className="nav-link p-0 pb-1" to={ROUTES.Intro}>
                  Home
                </Link>
              </li>
              <li className="px-2 mx-2">
                <Link className="nav-link p-0 pb-1" to={ROUTES.Projects}>
                  Projects
                </Link>
              </li>
              <li className="px-2 mx-2">
                <Link className="nav-link p-0 pb-1" to={ROUTES.About}>
                  Aboutsssssssssss
                </Link>
              </li>
            </ul>
          </nav>
          <hr className="hr-line" />

          <div className="menu-trigger" onClick={this.menuOpen}>
            <span
              data-isclicked={open}
              data-ishome={home}
              className="menu-icon"
            />
          </div>
        </div>

        <nav className="mobile-nav" data-open={open}>
          <ul>
            <li>
              <Link
                className="nav-link p-0 pb-1"
                onClick={this.menuOpen}
                to={ROUTES.Intro}
              >
                Home
              </Link>
              <Link
                className="nav-link p-0 pb-1"
                onClick={this.menuOpen}
                to={ROUTES.Projects}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="nav-link p-0 pb-1"
                onClick={this.menuOpen}
                to={ROUTES.About}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
