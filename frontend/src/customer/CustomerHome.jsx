import React from 'react'
import { useNavigate } from 'react-router';
import "../styles.css";

export default function CustomerHome() {

    let navigate = useNavigate();
    function handleNavigateItems() {
      navigate('/ViewItems')
    }
    function handleNavigateCart() {
        navigate('/ViewCart')
      }
      function handleNavigateWishlist() {
        navigate('/ViewWishList')
      }


  return (
    <div>
        <div className='container'>
        <center>
            <h2>Welcome !!!</h2>
        <button onClick={handleNavigateItems}>Items</button><br/><br/>
        <button onClick={handleNavigateCart}>Cart</button><br/><br/>
        <button onClick={handleNavigateWishlist}>Wish List</button><br/><br/>
        </center>
       
    </div>
    </div>
  )
}
