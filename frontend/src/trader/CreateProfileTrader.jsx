import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import axios from "axios";
import "../styles.css";

export default function CreateProfileTrader() {
  let navigate = useNavigate();
  function handleNavigate() {
    navigate('/TraderHome')
  }

  const [data, setData] = useState({
    traderName: "",
    traderNIC: "",
    traderEmail: "",
    userName: "",
    password: "",
  });

  const HandleOnChange = (e) => {
    e.persist();
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const onReset = () => {
    setData({
      traderName: "",
      traderNIC: "",
      traderEmail: "",
      userName: "",
      password: "",
    });
  };

  const addTrader = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:3000/traders", data);
    alert("Successfully Registered !");
    onReset();
    handleNavigate();
  };

  return (
    <div className="container">
      <center>
        <h1>Sign Up</h1>
      </center>
      <label className="form-labels">Name</label>
      <input
        type="text"
        className="form-inputs"
        name="traderName"
        id="traderName"
        value={data.traderName}
        onChange={(e) => HandleOnChange(e)}
      />
      <br />
      <br />
      <label className="form-labels">NIC</label>
      <input
        type="text"
        className="form-inputs"
        name="traderNIC"
        id="traderNIC"
        value={data.traderNIC}
        onChange={(e) => HandleOnChange(e)}
      />
      <br />
      <br />
      <label className="form-labels">Email</label>
      <input
        type="email"
        className="form-inputs"
        name="traderEmail"
        id="traderEmail"
        value={data.traderEmail}
        onChange={(e) => HandleOnChange(e)}
      />
      <br />
      <br />
      <label className="form-labels">Username</label>
      <input
        className="form-inputs"
        name="userName"
        id="userName"
        value={data.userName}
        onChange={(e) => HandleOnChange(e)}
      />
      <br />
      <br />
      <label className="form-labels">Password</label>
      <input
        type="password"
        className="form-inputs"
        name="password"
        id="password"
        value={data.password}
        onChange={(e) => HandleOnChange(e)}
      />
      <br />
      <br />
      <center>
        <h4>
          Already a Member? <a href="TraderLogin">Log In</a>
        </h4>
        <button className="Buttons" onClick={(e) => addTrader(e)}>
          Sign Up
        </button>
      </center>
    </div>
  );
}
