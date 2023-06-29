import React, { Component } from "react";

class GeneralInfo extends Component {
  state = {
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    telephone: "",
    edit: false,
  };

  editFirstName = (e) => {
    const newName = e.target.value;
    this.setState({
      firstName: newName,
    });
  };

  editLastName = (e) => {
    const newName = e.target.value;
    this.setState({
      lastName: newName,
    });
  };

  editTitle = (e) => {
    const newTitle = e.target.value;
    this.setState({
      title: newTitle,
    });
  };

  editEmail = (e) => {
    const newEmail = e.target.value;
    this.setState({
      email: newEmail,
    });
  };

  editTel = (e) => {
    const newTel = e.target.value;
    this.setState({
      telephone: newTel,
    });
  };

  render() {
    return (
      <div>
        <div>
          <label>First Name:</label>
          <p>{this.state.firstName}</p>
        </div>
        <input value={this.state.firstName} onChange={this.editFirstName} />

        <div>
          <label>Last Name:</label>
          <p>{this.state.lastName}</p>
        </div>
        <input value={this.state.lastName} onChange={this.editLastName} />

        {/* Render the remaining inputs and preview sections */}
      </div>
    );
  }
}

export default GeneralInfo;
