import React, { useState } from "react";

export default function Experience({ updateExperienceData }) {
  const [state, setState] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    onGoing: false,
    jobs: [],
  });

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  function addJob(e) {
    e.preventDefault();

    const newJob = {
      company: state.company,
      position: state.position,
      startDate: state.startDate,
      endDate: state.endDate,
      onGoing: state.onGoing,
    };

    setState((prevState) => ({
      ...prevState,
      jobs: [...prevState.jobs, newJob],
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      onGoing: false,
    }));

    updateExperienceData((prevJobs) => [...prevJobs, newJob]);
  }

  return (
    <div>
      <h2 className="listHeading">Add Work Experience</h2>
      <form className="experienceForm" onSubmit={addJob}>
        <div>
          <div className="formElement nameElement fullWidthInput">
            <label>Company</label>
            <input
              name="company"
              value={state.company}
              onChange={handleChange}
            />
          </div>
          <div className="formElement nameElement fullWidthInput">
            <label>Position</label>
            <input
              name="position"
              value={state.position}
              onChange={handleChange}
            />
          </div>

          <div className="formElement dateRow fullWidthInput">
            <label className="dateLabel">Start Date</label>

            <input
              name="startDate"
              value={state.startDate}
              onChange={handleChange}
              type="month"
            />
          </div>
          <div className="formElement dateRow fullWidthInput">
            <label className="dateLabel">End Date</label>
            <input
              name="endDate"
              value={state.endDate}
              onChange={handleChange}
              type="month"
            />
          </div>
          <div className="checkboxContainer">
            <label htmlFor="ongoingCheckbox">Ongoing</label>
            <input
              name="onGoing"
              id="ongoingCheckbox"
              type="checkbox"
              checked={state.onGoing}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Add new Experience</button>
        </div>
      </form>
    </div>
  );
}
