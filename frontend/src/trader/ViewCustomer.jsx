import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

export default function ViewCustomer() {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const result = await axios.get("http://localhost:3000/customers/");
    setCustomer(result.data);
  };

  return (
    <div>
      <center>
        <h2>Registered Customers</h2>
        <table>
          <tr>
            <th>Customer Name</th>
            <th>Customer NIC</th>
            <th>Customer Email</th>
          </tr>
          {customer.map((obj) => (
            <tr>
              <td>{obj.customerName}</td>
              <td>{obj.customerNIC}</td>
              <td>{obj.customerEmail}</td>
            </tr>
          ))}
        </table>
      </center>
    </div>
  );
}
