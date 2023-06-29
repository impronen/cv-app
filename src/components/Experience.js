import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job: {
        company: "",
        position: "",
        startDate: new Date(),
        endDate: new Date(),
        onGoing: false,
        editing: false,
      },
      jobs: [],
    };
  }

  // Basic editing of job properties
  editCompany = (e) => {
    const newCompany = e.target.value;
    this.setState((prevState) => ({
      job: {
        ...prevState.job,
        company: newCompany,
      },
    }));
  };

  editPosition = (e) => {
    const newPosition = e.target.value;
    this.setState((prevState) => ({
      job: {
        ...prevState.job,
        position: newPosition,
      },
    }));
  };

  editStartDate = (e) => {
    const newStartDate = e.target.value;
    this.setState((prevState) => ({
      job: {
        ...prevState.job,
        startDate: newStartDate,
      },
    }));
  };

  editEndDate = (e) => {
    const newEndDate = e.target.value;
    this.setState((prevState) => ({
      job: {
        ...prevState.job,
        endDate: newEndDate,
      },
    }));
  };

  editOngoing = (e) => {
    const newOngoing = e.target.checked;
    this.setState((prevState) => ({
      job: {
        ...prevState.job,
        onGoing: newOngoing,
      },
    }));
  };

  onSubmitExperience = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      jobs: [...prevState.jobs, prevState.job],
      job: {
        company: "",
        position: "",
        startDate: new Date(),
        endDate: new Date(),
        onGoing: false,
        editing: false,
      },
    }));
  };
  render() {
    return <div>{/* TODO: Do dem dom elements */}</div>;
  }
}

export default Experience;
