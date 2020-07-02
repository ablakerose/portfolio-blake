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
            <div callName="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr></hr>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
