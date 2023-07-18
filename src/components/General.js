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
    <>
      <h2 className="mainHeading">Edit your details here</h2>
      <h2>Info</h2>

      <form className="generalInfo">
        <div className="formElement">
          <label>Title</label>

          <input
            name="title"
            type="text"
            className="input"
            value={generalData.title}
            onChange={handleChange}
          />
        </div>

        <div className="formElement">
          <>
            <label>First Name</label>

            <input
              name="firstName"
              type="text"
              className="input"
              value={generalData.firstName}
              onChange={handleChange}
            />
          </>
        </div>
        <div className="formElement">
          <>
            <label>Last Name</label>

            <input
              name="lastName"
              type="text"
              className="input"
              value={generalData.lastName}
              onChange={handleChange}
            />
          </>
        </div>

        <div className="formElement">
          <label>Email</label>

          <input
            name="email"
            type="email"
            className="input"
            value={generalData.email}
            onChange={handleChange}
          />
        </div>

        <div className="formElement">
          <label>Tel</label>

          <input
            name="telephone"
            type="tel"
            className="input"
            value={generalData.telephone}
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  );
}
