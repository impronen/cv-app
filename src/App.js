import React, { useState } from "react";
import GeneralInfo from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Display from "./components/disp/Display";

export default function App() {
  const [experienceData, setExperienceData] = useState([]);
  const [generalData, setGeneralData] = useState([]);
  const [educationData, setEducationData] = useState([]);

  const updateExperienceData = (experience) => {
    setExperienceData(experience);
  };

  const updateGeneralData = (general) => {
    setGeneralData(general);
  };

  const updateEducationData = (education) => {
    setEducationData(education);
  };

  return (
    <div className="mainContainer">
      <div className="editInfo">
        <GeneralInfo updateGeneralData={updateGeneralData} />
        <Experience updateExperienceData={updateExperienceData} />
        <Education updateEducationData={updateEducationData} />
      </div>
      <div className="displayInfo">
        <Display
          generalData={generalData}
          experienceData={experienceData}
          educationData={educationData}
        />
      </div>
    </div>
  );
}
