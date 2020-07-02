import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "../App.css";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.sharicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="woman-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />
              <p>
                HTML/CSS | JavaScript | React | React Native | Ruby | Ruby on
                Rails
              </p>
              <div className="social-links">
                {/*  LinkedIn */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/*  GitHub */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/*  Youtube */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
