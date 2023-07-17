import React, { useState, useEffect } from "react";

export default function Experience({ updateExperienceData }) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [onGoing, setOnGoing] = useState("");
  const [jobs, setJobs] = useState([]);

  // Basic editing of job properties
  function changeCompany(e) {
    setCompany(e.target.value);
  }

  function changePosition(e) {
    setPosition(e.target.value);
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

  function addJob(e) {
    e.preventDefault();

    const newJob = {
      company: company,
      position: position,
      startDate: startDate,
      endDate: endDate,
      onGoing: onGoing,
    };

    setJobs((prevJobs) => [...prevJobs, newJob]);

    setCompany("");
    setPosition("");
    setStartDate("");
    setEndDate("");
    setOnGoing("");
  }

  useEffect(() => {
    updateExperienceData(jobs);
  }, [jobs, updateExperienceData]);

  return (
    <div>
      <h2 className="listHeading">Add Work Experience</h2>
      <form className="experienceForm" onSubmit={addJob}>
        <div>
          <div className="formElement nameElement fullWidthInput">
            <label>Company:</label>
            <input value={company} onChange={changeCompany} />
          </div>
          <div className="formElement nameElement fullWidthInput">
            <label>Position:</label>
            <input value={position} onChange={changePosition} />
          </div>

          <div className="formElement dateRow fullWidthInput">
            <label className="dateLabel">Start Date</label>

            <input value={startDate} onChange={changeStartDate} type="month" />
          </div>
          <div className="formElement dateRow fullWidthInput">
            <label className="dateLabel">End Date</label>
            <input value={endDate} onChange={changeEndDate} type="month" />
          </div>
          <div className="checkboxContainer">
            <label htmlFor="ongoingCheckbox">Ongoing</label>
            <input
              id="ongoingCheckbox"
              type="checkbox"
              checked={onGoing}
              onChange={changeOnGoing}
            />
          </div>

          <button type="submit">Add new Experience</button>
        </div>
      </form>
    </div>
  );
}
