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

  render() {
    return (
      <div>
        <div>
          <GeneralInfo />
          <Experience />
          <Education />
        </div>
        <div>
          <Display />
        </div>
      </div>
    );
  }
}

export default App;
