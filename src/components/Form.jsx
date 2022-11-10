import React, { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setGender("")
    setPhone("")
    setUsername("")
  };
  return (
    <div className="form-div">
      <a href="https://irfansutlu.github.io/mywebsite/">
        <img
          src="https://irfansutlu.github.io/mywebsite/img/irfanpp-removebg-preview.png"
          target="_blank"
        />
      </a>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <select onChange={(e) => setGender(e.target.value)} required>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
