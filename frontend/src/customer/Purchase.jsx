import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

export default function Purchase() {
  const [data, setData] = useState({
    holderName: "",
    cardNum: "",
    expDate: "",
    cvv: "",
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
      holderName: "",
      cardNum: "",
      expDate: "",
      cvv: "",
    });
  };

  const addPay = async (e) => {
    e.preventDefault();

    const result = await axios.post("http://localhost:3000/payments", data);
    alert("Successfully Added Payment !");

    onReset();
  };

  return (
    <div className="container">
      <center>
        <form>
          <h1>Pay Here !</h1>
          <label className="form-labels">Card Holder Name</label>
          <input
            type="text"
            name="holderName"
            id="holderName"
            value={data.holderName}
            onChange={(e) => HandleOnChange(e)}
          />
          <br />
          <br />
          <label className="form-labels">Card Number</label>
          <input
            type="text"
            name="cardNum"
            id="cardNum"
            value={data.cardNum}
            onChange={(e) => HandleOnChange(e)}
          />
          <br />
          <br />
          <label className="form-labels">Expiry Date</label>
          <input
            type="month"
            name="expDate"
            id="expDate"
            value={data.expDate}
            onChange={(e) => HandleOnChange(e)}
          />
          <br />
          <br />
          <label className="form-labels">CVC</label>
          <input
            type="text"
            name="cvv"
            id="cvv"
            value={data.cvv}
            onChange={(e) => HandleOnChange(e)}
          />
          <br />
          <br />
          <center>
            <button onClick={(e) => addPay(e)}>Pay</button>
          </center>
        </form>
      </center>
    </div>
  );
}
