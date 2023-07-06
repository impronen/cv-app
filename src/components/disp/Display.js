import React, { Component } from "react";

class Display extends Component {
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
        <h2>Display Component</h2>
        <h3>Experience:</h3>
        <ul>
          {this.props.experienceData.map((experience, index) => (
            <li key={index}>{experience}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Display;
