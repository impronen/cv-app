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
        <h2>About you</h2>

        <form className="generalInfo">
          <div>
            <label>Title:</label>
          </div>
          <input value={this.state.title} onChange={this.editTitle} />

          <div>
            <label>First Name:</label>
          </div>
          <input value={this.state.firstName} onChange={this.editFirstName} />

          <div>
            <label>Last Name:</label>
          </div>
          <input value={this.state.lastName} onChange={this.editLastName} />

          <div>
            <label>Email:</label>
          </div>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.editEmail}
          />

          <div>
            <label>Tel:</label>
          </div>
          <input value={this.state.telephone} onChange={this.editTel} />
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
