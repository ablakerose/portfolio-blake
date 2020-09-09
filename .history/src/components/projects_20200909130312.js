import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";
import "../App.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
    this.myRef = React.createRef();
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
      {/* Project*/}
        <div>
        </div>

      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Angular</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div ref={this.myRef} className="category-tabs">
        <h1>Projects</h1>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Ruby on Rails</Tab>
          <Tab>JavaScript</Tab>
          <Tab>React</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content"> {this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
