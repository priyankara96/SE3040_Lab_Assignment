import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css";

export default function ViewCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    const result = await axios.get("http://localhost:3000/cartitems");
    setCart(result.data);
  };

  return (
    <div>
      <center>
        <h2>Shopping Cart</h2>
        <table>
          <tr>
            <th>Item Name</th>
            <th>Description</th>
            <th>Item Price</th>
            <th>Manufactured Date</th>
            <th>Expiry Date</th>
          </tr>
          {cart.map((obj) => (
            <tr>
              <td>{obj.itemName}</td>
              <td>{obj.itemDesc}</td>
              <td>{obj.itemPrice}</td>
              <td>{obj.manuDate}</td>
              <td>{obj.expDate}</td>
            </tr>
          ))}
        </table>
      </center>
    </div>
  );
}
