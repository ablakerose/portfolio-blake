import React, { Component } from "react";
import { Tab } from "react-mdl";
import "../App.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <h1>This is React</h1>
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
      <div className="category-tabs">
        <Tab
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        ></Tab>
        <Tab>React</Tab>
        <Tab>Ruby on Rails</Tab>
        <Tab>JavaScript</Tab>
        <Tab>React</Tab>
        <h1>Projects</h1>
      </div>
    );
  }
}

export default Projects;
