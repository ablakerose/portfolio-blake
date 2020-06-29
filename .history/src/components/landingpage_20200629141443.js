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
              src="https://images.unsplash.com/photo-1515191107209-c28698631303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
              alt="avatar"
              className="woman-img"
            />
            <div callName="banner-text">
              <h1></h1>
            </div>
            >
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
