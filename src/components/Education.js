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
    this.setState(
      (prevState) => ({
        schools: [...prevState.schools, prevState.school],
        school: {
          schoolName: "",
          degree: "",
          startDate: new Date(),
          endDate: new Date(),
          onGoing: false,
          editing: false,
        },
      }),
      () => {
        console.log(this.state.schools);
      }
    );
  };

  render() {
    return (
      <div>
        <h2>Education</h2>
        <form onSubmit={this.onSubmitEducation}>
          <div>
            <div>
              <label>School:</label>
            </div>
            <input
              value={this.state.schoolName}
              onChange={this.editInstitution}
            />

            <div>
              <label>Degree:</label>
            </div>
            <input value={this.state.degree} onChange={this.editDegree} />

            <div>
              <label>Start Date:</label>
            </div>
            <input value={this.state.startDate} onChange={this.editStartDate} />

            <div>
              <label>End Date:</label>
            </div>
            <input value={this.state.endDate} onChange={this.editEndDate} />

            <button type="submit">Add new Education</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Education;
