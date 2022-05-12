import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "../styles.css";

export default function ViewItems() {
  let navigate = useNavigate();
  function handleNavigate() {
    navigate("/Purchase");
  }

  const [item, setItem] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const result = await axios.get("http://localhost:3000/items");
    setItem(result.data);
  };

  const addCart = async (itemObj) => {
    console.log(itemObj);
    const result = await axios.post("http://localhost:3000/cartitems", itemObj);
    alert("Successfully Added Item To Cart !");
  };

  const addWishList = async (itemObj) => {
    console.log(itemObj);
    const result = await axios.post(
      "http://localhost:3000/wishlistitems",
      itemObj
    );
    alert("Successfully Added Item To WishList !");
  };

  return (
    <div>
      <center>
        <h1>Items</h1>
        {item.map((obj) => (
          <div className="container3">
            <h3>{obj.itemName}</h3>
            <p>Item Description : {obj.itemDesc}</p>
            <p>Item Price : {obj.itemPrice}</p>
            <p>Manufactured Date : {obj.manuDate}</p>
            <p>Expired Date : {obj.expDate}</p>
            <button onClick={() => addCart(obj)}>Add To Cart</button>
            <button onClick={() => addWishList(obj)}>Add To WishList</button>
            <button onClick={handleNavigate}>Checkout</button>
          </div>
        ))}
      </center>
    </div>
  );
}
