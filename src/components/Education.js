import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ErrorModal from "./ErrorModal";

export default function Education({ updateEducationData }) {
  const [state, setState] = useState({
    id: "",
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
    onGoing: "",
    schools: [],
    showErrorModal: false,
  });

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  function addEducation(e) {
    e.preventDefault();

    const newEducation = {
      id: uuidv4(),
      schoolName: state.schoolName,
      degree: state.degree,
      startDate: state.startDate,
      endDate: state.endDate,
      onGoing: state.onGoing,
    };

    if (
      newEducation.degree.trim() === "" ||
      newEducation.schoolName.trim() === "" ||
      newEducation.startDate.trim() === "" ||
      (newEducation.onGoing === false && newEducation.endDate.trim() === "")
    ) {
      setState((prevState) => ({
        ...prevState,
        showErrorModal: true,
      }));
      return;
    }
    setState((prevState) => ({
      ...prevState,
      schools: [...prevState.schools, newEducation],
      id: "",
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
      onGoing: false,
    }));

    updateEducationData((prevSchools) => [...prevSchools, newEducation]);
  }

  function closeErrorModal() {
    setState((prevState) => ({
      ...prevState,
      showErrorModal: false,
    }));
  }
  return (
    <div>
      <h2 className="listHeading">Add Education</h2>
      <form className="educationForm" onSubmit={addEducation}>
        <div>
          <div className="formElement nameElement fullWidthInput">
            <label>School</label>
            <input
              name="schoolName"
              required
              value={state.schoolName}
              onChange={handleChange}
            />
          </div>
          <div className="formElement nameElement fullWidthInput">
            <label>Degree</label>
            <input name="degree" value={state.degree} onChange={handleChange} />
          </div>

          <div className="formElement dateRow">
            <label className="dateLabel">Start Date</label>

            <input
              name="startDate"
              value={state.startDate}
              onChange={handleChange}
              type="month"
            />
          </div>
          <div className="formElement dateRow">
            <label className="dateLabel">End Date</label>

            <input
              name="endDate"
              value={state.endDate}
              onChange={handleChange}
              type="month"
            />
          </div>
          <div className="checkboxContainer">
            <label htmlFor="ongoingCheckbox">Ongoing:</label>
            <input
              name="onGoing"
              id="ongoingCheckbox"
              type="checkbox"
              checked={state.onGoing}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Add new Education</button>
        </div>
      </form>
      <ErrorModal
        showErrorModal={state.showErrorModal}
        closeErrorModal={closeErrorModal}
      />
    </div>
  );
}
