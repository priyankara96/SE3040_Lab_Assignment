import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

export default function Promotions() {
  const [resPromo, setResPromo] = useState([]);
  const [data, setData] = useState({
    promoID: "",
    promoName: "",
    promoDesc: "",
    promoDate: "",
  });

  useEffect(() => {
    fetchPromos();
  }, []);

  const HandleOnChange = (e) => {
    e.persist();
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const onReset = () => {
    setData({
      promoID: "",
      promoName: "",
      promoDesc: "",
      promoDate: "",
    });
  };

  const fetchPromos = async () => {
    const result = await axios.get("http://localhost:3000/promos");
    setResPromo(result.data);
  };

  const addPromos = async (e) => {
    e.preventDefault();
    if (data.promoID) {
      const result = await axios.post(
        "http://localhost:3000/promos",
        data
      );
      alert("Successfully Added Promotion !");
    }
    fetchPromos();
    onReset();
  };

  return (
    <div className="container">
      <center>
        <h2>Add Promotions</h2>
      </center>
      <form>
        <label className="form-labels">Promotion ID</label>
        <input
          type="text"
          name="promoID"
          id="promoID"
          value={data.promoID}
          onChange={(e) => HandleOnChange(e)}
        />
        <br />
        <br />
        <label className="form-labels">Promotion Name</label>
        <input
          type="text"
          name="promoName"
          id="promoName"
          value={data.promoName}
          onChange={(e) => HandleOnChange(e)}
        />
        <br />
        <br />
        <label className="form-labels">Description</label>
        <input
          type="text"
          name="promoDesc"
          id="promoDesc"
          value={data.promoDesc}
          onChange={(e) => HandleOnChange(e)}
        />
        <br />
        <br />
        <label className="form-labels">Promotion Date</label>
        <input
          type="text"
          name="promoDate"
          id="promoDate"
          value={data.promoDate}
          onChange={(e) => HandleOnChange(e)}
        />
        <br />
        <br />
        <center>
          <button onClick={(e) => addPromos(e)}>Submit</button>
        </center>
      </form>

   <center><h2>Promotions</h2></center> 
      <table>
        <tr>
          <th>Promo ID</th>
          <th>Promo Name</th>
          <th>Promo Description</th>
          <th>Promo Date</th>
        </tr>
        {resPromo.map((obj) => (
          <tr>
            <td>{obj.promoID}</td>
            <td>{obj.promoName}</td>
            <td>{obj.promoDesc}</td>
            <td>{obj.promoDate}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
