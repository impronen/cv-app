import React, { Component } from "react";
import GeneralInfo from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: true,
    };
  }

  render() {
    return (
      <div>
        <GeneralInfo />
        <Experience />
        <Education />
      </div>
    );
  }
}

export default App;
