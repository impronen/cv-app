import React from "react";

export default function Display(props) {
  const { generalData, experienceData, educationData } = props;

  return (
    <>
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
            {generalData.email} &nbsp; {generalData.telephone}
          </p>
        </div>
        <hr />
        <h3 className="listHeading">Professional Experience</h3>
        <div>
          {experienceData.map((job) => (
            <div div className="jobs" key={job.id}>
              <h4 className="itemHeading">
                {" "}
                {job.company} | {""}
                {job.position}
              </h4>
              <p>
                Start {job.startDate} |{" "}
                {job.onGoing ? "Present" : `End ${job.endDate}`}
              </p>
            </div>
          ))}
        </div>
        <hr />
        <h3 className="listHeading">Formal Education</h3>
        <div>
          {educationData.map((school) => (
            <div className="schools" key={school.id}>
              <h4 className="itemHeading">
                {" "}
                {school.schoolName} | {""}
                {school.degree}
              </h4>
              <p>
                Start {school.startDate} |{" "}
                {school.onGoing ? "Present" : `End ${school.endDate}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* For tomorrow:  Essentially put something like this where you render the to date 

{{checkboxState} ? "Present" : `${whatever holds your To: date}`}

This says if the checkbox state is true, render 'Present',  if not, 
render the date you input as the end date.  You need to confirm what value the checkbox has... 
I can't remember if it's checked or true might need to address that as well.

Formatting might not be exactly right, but that's how I'd do it. 

also helpful but not in this case is the && if you only want to show something if 
a condition is true. I found that one super helpful in conditional rendering. */
