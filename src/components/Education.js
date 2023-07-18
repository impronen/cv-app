import React, { useState, useEffect } from "react";

export default function Education({ updateEducationData }) {
  const [schoolName, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [onGoing, setOnGoing] = useState("");
  const [schools, setSchools] = useState([]);

  function changeSchoolName(e) {
    setSchool(e.target.value);
  }

  function changeDegree(e) {
    setDegree(e.target.value);
  }

  function changeStartDate(e) {
    setStartDate(e.target.value);
  }

  function changeEndDate(e) {
    setEndDate(e.target.value);
  }

  function changeOnGoing(e) {
    setOnGoing(e.target.checked);
  }

  function addEducation(e) {
    e.preventDefault();

    const newEducation = {
      schoolName: schoolName,
      degree: degree,
      startDate: startDate,
      endDate: endDate,
      onGoing: onGoing,
    };

    setSchools((prevSchools) => [...prevSchools, newEducation]);

    setSchool("");
    setDegree("");
    setStartDate("");
    setEndDate("");
    setOnGoing("");
  }

  useEffect(() => {
    updateEducationData(schools);
  }, [schools, updateEducationData]);

  return (
    <div>
      <h2 className="listHeading">Add Education</h2>
      <form className="educationForm" onSubmit={addEducation}>
        <div>
          <div className="formElement nameElement fullWidthInput">
            <label>School</label>
            <input value={schoolName} onChange={changeSchoolName} />
          </div>
          <div className="formElement nameElement fullWidthInput">
            <label>Degree</label>
            <input value={degree} onChange={changeDegree} />
          </div>

          <div className="formElement dateRow">
            <label className="dateLabel">Start Date</label>

            <input value={startDate} onChange={changeStartDate} type="month" />
          </div>
          <div className="formElement dateRow">
            <label className="dateLabel">End Date</label>

            <input value={endDate} onChange={changeEndDate} type="month" />
          </div>
          <div className="checkboxContainer">
            <label htmlFor="ongoingCheckbox">Ongoing:</label>
            <input
              id="ongoingCheckbox"
              type="checkbox"
              checked={onGoing}
              onChange={changeOnGoing}
            />
          </div>

          <button type="submit">Add new Education</button>
        </div>
      </form>
    </div>
  );
}
