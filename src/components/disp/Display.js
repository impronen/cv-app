import React, { useState } from "react";

export default function Display(props) {
  const { generalData, experienceData, educationData } = props;

  return (
    <div>
      <h2>Preview</h2>
      <h3>About</h3>
      <div className="title">
        <h4>{generalData.title}</h4>
      </div>
      <div className="name">
        <h4>{generalData.firstName}</h4>
        <h4>{generalData.lastName}</h4>
      </div>
      <div className="contactInfo">
        <h4>{generalData.email}</h4>
        <h4>{generalData.telephone}</h4>
      </div>
      <h3>Experience</h3>
      <div>
        {experienceData.map((job) => (
          <div>
            <h4>
              {" "}
              {job.company} / {""}
              {job.position}
            </h4>
            <h5>Start Date: {job.startDate}</h5>
            <h5>End Date: {job.endDate}</h5>
          </div>
        ))}
      </div>
      <h3>Education</h3>
      <div>
        {educationData.map((school) => (
          <div>
            <h4>
              {" "}
              {school.schoolName} / {""}
              {school.degree}
            </h4>
            <h5>Start Date: {school.startDate}</h5>
            <h5>End Date: {school.endDate}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
