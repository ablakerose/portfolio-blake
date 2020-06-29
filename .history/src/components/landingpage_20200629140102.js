import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "../App.css";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://images.unsplash.com/photo-1593375434160-dddef07bd2d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
              className="door"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
