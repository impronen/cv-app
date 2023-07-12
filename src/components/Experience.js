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
      <h2>Work Experience</h2>
      <form onSubmit={addJob}>
        <div>
          <div>
            <label>Company:</label>
          </div>
          <input value={company} onChange={changeCompany} />

          <div>
            <label>Position:</label>
          </div>
          <input value={position} onChange={changePosition} />

          <div>
            <label>Start Date:</label>
          </div>
          <input value={startDate} onChange={changeStartDate} type="date" />

          <div>
            <label>End Date:</label>
          </div>
          <input value={endDate} onChange={changeEndDate} type="date" />

          <div>
            <label>Ongoing:</label>
          </div>
          <input type="checkbox" checked={onGoing} onChange={changeOnGoing} />

          <button type="submit">Add new Experience</button>
        </div>
      </form>
    </div>
  );
}
