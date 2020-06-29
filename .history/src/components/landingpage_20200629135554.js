import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "../components/App.css";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="" alt="avatar" className="door" />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
