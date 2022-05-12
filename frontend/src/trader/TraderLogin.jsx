import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "../styles.css";

export default function TraderLogin() {
  let navigate = useNavigate();
  function handleNavigate() {
    navigate("/TraderHome");
  }

  const [user, setUser] = useState([]);
  const [data, setData] = useState({
    traderNIC: "",
    password: "",
  });

  const HandleOnChange = (e) => {
    //e.persist();
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const onReset = () => {
    setData({
      traderNIC: "",
      password: "",
    });
  };

  const getUser = async (nic) => {
    try {
      const res = await axios.get(`http://localhost:3000/traders/${nic}`);
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      traderNIC: data.traderNIC,
      password: data.password,
    };
    getUser(userData.traderNIC);
  };

  if(user){
    if (
      user.traderNIC === data.traderNIC &&
      user.password === data.password
    ) {
      alert("Login Successful !");
      onReset();
      handleNavigate();
    }
  }
   
  

  return (
    <div className="container">
      <center>
        <form onSubmit={onSubmit}>
          <h1>Login</h1>
          <label className="form-labels">Username</label>
          <input
            className="form-inputs"
            name="traderNIC"
            id="traderNIC"
            value={data.traderNIC}
            onChange={HandleOnChange}
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
            onChange={HandleOnChange}
          />
          <br />
          <br />
          <button className="Buttons">Sign Up</button>
        </form>
      </center>
    </div>
  );
}
