import React from "react";

export default function Display(props) {
  const { generalData, experienceData, educationData } = props;

  return (
    <div className="renderContainer">
      <div className="infoContainer">
        <div>
          <h4 className="title">{generalData.title}</h4>

          <div className="nameContainer">
            <p className="name">{generalData.firstName}</p>
            <p className="name">{generalData.lastName}</p>
          </div>
        </div>
        <div className="contactInfo">
          <p>
            {generalData.email} / {generalData.telephone}
          </p>
        </div>
        <hr />
        <h3 className="listHeading">Professional Experience</h3>
        <div>
          {experienceData.map((job) => (
            <div>
              <h4 className="itemHeading">
                {" "}
                {job.company} / {""}
                {job.position}
              </h4>
              <p>
                Start: {job.startDate} | End: {job.endDate}
              </p>
            </div>
          ))}
        </div>
        <hr />
        <h3 className="listHeading">Formal Education</h3>
        <div>
          {educationData.map((school) => (
            <div>
              <h4 className="itemHeading">
                {" "}
                {school.schoolName} / {""}
                {school.degree}
              </h4>
              <p>
                Start: {school.startDate}| End: {school.endDate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
