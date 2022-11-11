import React, { useEffect, useState } from "react";
import { ref, get, child, set, remove } from "firebase/database";
import { database } from "../firebase/firebase";

function Form({
  data,
  setData,
  username,
  setUsername,
  phone,
  setPhone,
  gender,
  setGender,
}) {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    set(
      ref(database, "/"),
      data
        ? [
            ...data,
            {
              name: username,
              phone: phone,
              gender: gender,
            },
          ]
        : [
            {
              name: username,
              phone: phone,
              gender: gender,
            },
          ]
    );
    getData();
    setGender("");
    setUsername("");
    setPhone("");
  };

  const getData = () => {
    const dbRef = ref(database);
    get(child(dbRef, `/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
          console.log(snapshot.val());
        } else {
          setData([]);
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <select
          onChange={(e) => setGender(e.target.value)}
          value={gender}
          required
        >
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
