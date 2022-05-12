import React from 'react'
import { useNavigate } from 'react-router';
import "../styles.css";

export default function TraderHome() {

    let navigate = useNavigate();
    function handleNavigateItems() {
      navigate('/Items')
    }
    function handleNavigatePromos() {
        navigate('/Promotions')
      }
      function handleNavigateCustomers() {
        navigate('/ViewCustomer')
      }

  return (
    <div className='container'>
        <center>
            <h2>Welcome !!!</h2>
        <button onClick={handleNavigateItems}>Items</button><br/><br/>
        <button onClick={handleNavigatePromos}>Promotions</button><br/><br/>
        <button onClick={handleNavigateCustomers}>Customers</button><br/><br/>
        </center>
       
    </div>
  )
}
