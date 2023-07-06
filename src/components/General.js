import React, { useState } from "react";

export default function GeneralInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  function changeName(e) {
    setFirstName(e.target.value);
  }
  function changeLastName(e) {
    setLastName(e.target.value);
  }

  function changeTitle(e) {
    setTitle(e.target.value);
  }

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function changeTelephone(e) {
    setTelephone(e.target.value);
  }

  return (
    <div>
      <h2>About you</h2>

      <form className="generalInfo">
        <div>
          <label>Title:</label>
        </div>
        <input value={title} onChange={changeTitle} />

        <div>
          <label>First Name:</label>
        </div>
        <input value={firstName} onChange={changeName} />

        <div>
          <label>Last Name:</label>
        </div>
        <input value={lastName} onChange={changeLastName} />

        <div>
          <label>Email:</label>
        </div>
        <input name="email" type="email" value={email} onChange={changeEmail} />

        <div>
          <label>Tel:</label>
        </div>
        <input value={telephone} onChange={changeTelephone} />
      </form>
    </div>
  );
}
