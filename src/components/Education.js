import React, { useState, useEffect } from "react";

export default function Education() {
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

  useEffect(() => {
    console.log(schools);
  }, [schools]);

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

  return (
    <div>
      <h2>Education</h2>
      <form onSubmit={addEducation}>
        <div>
          <div>
            <label>School:</label>
          </div>
          <input value={schoolName} onChange={changeSchoolName} />

          <div>
            <label>Degree:</label>
          </div>
          <input value={degree} onChange={changeDegree} />

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

          <button type="submit">Add new Education</button>
        </div>
      </form>
    </div>
  );
}
