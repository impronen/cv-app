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
        <input value={this.state.firstName} onChange={this.editFirstName} />
        <p>First Name: {this.state.firstName}</p>
        <input value={this.state.lastName} onChange={this.editLastName} />
        <p>Last Name: {this.state.lastName}</p>
      </div>
    );
  }
}

export default GeneralInfo;
