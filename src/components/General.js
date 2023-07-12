import React, { useState, useEffect } from "react";

export default function GeneralInfo({ updateGeneralData }) {
  const [generalData, setGeneralData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    telephone: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setGeneralData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  useEffect(() => {
    updateGeneralData(generalData);
  }, [generalData, updateGeneralData]);

  return (
    <div>
      <h2>About you</h2>

      <form className="generalInfo">
        <div>
          <label>Title:</label>
        </div>
        <input
          name="title"
          type="text"
          value={generalData.title}
          onChange={handleChange}
        />

        <div>
          <label>First Name:</label>
        </div>
        <input
          name="firstName"
          type="text"
          value={generalData.firstName}
          onChange={handleChange}
        />

        <div>
          <label>Last Name:</label>
        </div>
        <input
          name="lastName"
          type="text"
          value={generalData.lastName}
          onChange={handleChange}
        />

        <div>
          <label>Email:</label>
        </div>
        <input
          name="email"
          type="email"
          value={generalData.email}
          onChange={handleChange}
        />

        <div>
          <label>Tel:</label>
        </div>
        <input
          name="telephone"
          type="tel"
          value={generalData.telephone}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
