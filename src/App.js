import React, { Component } from "react";
import GeneralInfo from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Display from "./components/disp/Display";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalData: [],
      experienceData: [],
      educationData: [],
    };
  }

  updateExperienceData = (experience) => {
    this.setState((prevState) => ({
      experienceData: [...prevState.experienceData, experience],
    }));
  };

  render() {
    return (
      <div>
        <div>
          <GeneralInfo />
          <Experience updateExperienceData={this.updateExperienceData} />
          <Education />
        </div>
        <div>
          <Display experienceData={this.state.experienceData} />
        </div>
      </div>
    );
  }
}

export default App;
