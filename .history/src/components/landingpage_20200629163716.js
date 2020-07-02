import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "../App.css";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="" alt="avatar" className="woman-img" />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />
              <p>
                HTML/CSS | JavaScript | React | React Native | Ruby | Ruby on
                Rails
              </p>
              <div className="social-links">
                <a href="http://google.com" target="_blank"></a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
