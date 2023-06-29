import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: {
        schoolName: "",
        degree: "",
        startDate: new Date(),
        endDate: new Date(),
        onGoing: false,
        editing: false,
      },
      schools: [],
    };
  }
  editInstitution = (e) => {
    const newInstitution = e.target.value;
    this.setState((prevState) => ({
      school: {
        ...prevState.job,
        schoolName: newInstitution,
      },
    }));
  };

  editDegree = (e) => {
    const newDegree = e.target.value;
    this.setState((prevState) => ({
      school: {
        ...prevState.job,
        degree: newDegree,
      },
    }));
  };

  editStartDate = (e) => {
    const newStartDate = e.target.value;
    this.setState((prevState) => ({
      school: {
        ...prevState.job,
        startDate: newStartDate,
      },
    }));
  };

  editEndDate = (e) => {
    const newEndDate = e.target.value;
    this.setState((prevState) => ({
      school: {
        ...prevState.job,
        endDate: newEndDate,
      },
    }));
  };

  onSubmitEducation = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      schools: [...prevState.schools, prevState.school],
      school: {
        schoolName: "",
        degree: "",
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

export default Education;
