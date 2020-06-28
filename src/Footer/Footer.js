import React, { Component } from "react";

// CSS
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <p className="copyright p-2">© Nahida Islam 2020</p>
            <p className="copyright p-2">
              Inspired by{" "}
              <a href="https://www.lucasahlgren.com/">Lucas Ahlgren</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
