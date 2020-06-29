import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            {/* <img
              src="https://unsplash.com/photos/tO9r7s7tqhE"
              alt="avatar"
              className="door-img"
            /> */}
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
