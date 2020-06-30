import React, { Component } from "react";
//import { Tab } from

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activateTab: 0 };
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        ></Tabs>
        <h1>Projects</h1>
      </div>
    );
  }
}

export default Projects;
