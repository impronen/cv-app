import React, { Component } from "react";
import GeneralInfo from "./components/General";

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
      </div>
    );
  }
}

export default App;
