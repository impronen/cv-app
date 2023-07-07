import React, { useState } from "react";

export default function Display(props) {
  const { generalData, experienceData, educationData } = props;

  return (
    <div>
      <h2>Preview</h2>
      <h3>About</h3>
      <div className="name">
        <h4>{generalData.firstName}</h4>
        <h4>{generalData.lastName}</h4>
      </div>
      <h3>Experience</h3>
      <div>
        {experienceData.map((job, index) => (
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
    </div>
  );
}
