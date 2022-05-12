import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css";

export default function AddItem() {
  const [item, setItem] = useState([]);
  const [data, setData] = useState({
    itemID: "",
    itemName: "",
    itemDesc: "",
    itemPrice: "",
    batchNo: "",
    manuDate: "",
    expDate: "",
  });

  useEffect(() => {
    fetchInventoryItems();
  }, []);

  const HandleChange = (e) => {
    e.persist();
    const value = e.target.value;
    setData((data) => ({ ...data, [e.target.name]: value }));
  };

  const onReset = () => {
    setData({
      itemID: "",
      itemName: "",
      itemDesc: "",
      itemPrice: "",
      batchNo: "",
      manuDate: "",
      expDate: "",
    });
  };

  const fetchInventoryItems = async () => {
    const result = await axios.get("http://localhost:3000/items");
    setItem(result.data);
  };

  const addItems = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:3000/items/", data);
    alert("Item Added Successfully !");
    fetchInventoryItems();
    onReset();
  };

  const editItem = (objItem) => {
    setData({
      itemID: objItem.itemID,
      itemName: objItem.itemName,
      itemDesc: objItem.itemDesc,
      itemPrice: objItem.itemPrice,
      batchNo: objItem.batchNo,
      manuDate: objItem.manuDate,
      expDate: objItem.expDate,
    });
  };

  return (
    <div>
      <div className="container">
        <center>
          <h2>Add Item</h2>
        </center>
        <form onSubmit={addItems}>
          <label className="form-labels">Item ID</label>
          <input
            type="text"
            value={data.itemID}
            onChange={(e) => HandleChange(e)}
            name="itemID"
            id="itemID"
          />
          <br />
          <br />
          <label className="form-labels">Item Name</label>
          <input
            type="text"
            value={data.itemName}
            onChange={(e) => HandleChange(e)}
            name="itemName"
            id="itemName"
          />
          <br />
          <br />
          <label className="form-labels">Description</label>
          <input
            type="text"
            value={data.itemDesc}
            onChange={(e) => HandleChange(e)}
            name="itemDesc"
            id="itemDesc"
          />
          <br />
          <br />
          <label className="form-labels">Item Price</label>
          <input
            type="text"
            value={data.itemPrice}
            onChange={(e) => HandleChange(e)}
            name="itemPrice"
            id="itemPrice"
          />
          <br />
          <br />
          <label className="form-labels">Batch Number</label>
          <input
            type="text"
            value={data.batchNo}
            onChange={(e) => HandleChange(e)}
            name="batchNo"
            id="batchNo"
          />
          <br />
          <br />
          <label className="form-labels">Manufactured Date</label>
          <input
            type="text"
            value={data.manuDate}
            onChange={(e) => HandleChange(e)}
            name="manuDate"
            id="manuDate"
          />
          <br />
          <br />
          <label className="form-labels">Expiry Date</label>
          <input
            type="text"
            value={data.expDate}
            onChange={(e) => HandleChange(e)}
            name="expDate"
            id="expDate"
          />
          <br />
          <br />
          <center>
            <button type="submit">Submit</button>
          </center>
        </form>
      </div>

      <div className="container2">
        <center>
          <h2>Inventory</h2>
        </center>
        <table>
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Description</th>
            <th>Item Price</th>
            <th>Batch Number</th>
            <th>Manufactured Date</th>
            <th>Expiry Date</th>
            <th>Action</th>
          </tr>
          {item.map((obj) => (
            <tr>
              <td>{obj.itemID}</td>
              <td>{obj.itemName}</td>
              <td>{obj.itemDesc}</td>
              <td>{obj.itemPrice}</td>
              <td>{obj.batchNo}</td>
              <td>{obj.manuDate}</td>
              <td>{obj.expDate}</td>
              <td>
                <button onClick={() => editItem(obj)}>Edit</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
