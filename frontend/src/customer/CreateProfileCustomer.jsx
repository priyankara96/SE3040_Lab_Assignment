import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import axios from "axios";
import "../styles.css";

export default function CreateProfileCustomer() {

  let navigate = useNavigate();
  function handleNavigate() {
    navigate('/CustomerHome')
  }

  const [data, setData] = useState({
    customerName: "",
    customerNIC: "",
    customerEmail: "",
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
      customerName: "",
      customerNIC: "",
      customerEmail: "",
      userName: "",
      password: "",
    });
  };

  const addCustomer = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:3000/customers", data);
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
        name="customerName"
        id="customerName"
        value={data.customerName}
        onChange={(e) => HandleOnChange(e)}
      />
      <br />
      <br />
      <label className="form-labels">NIC</label>
      <input
        type="text"
        className="form-inputs"
        name="customerNIC"
        id="customerNIC"
        value={data.customerNIC}
        onChange={(e) => HandleOnChange(e)}
      />
      <br />
      <br />
      <label className="form-labels">Email</label>
      <input
        type="email"
        className="form-inputs"
        name="customerEmail"
        id="customerEmail"
        value={data.customerEmail}
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
          Already a Member? <a href="CustomerLogin">Log In</a>
        </h4>
        <button className="Buttons" onClick={(e) => addCustomer(e)}>
          Sign Up
        </button>
      </center>
    </div>
  );
}
