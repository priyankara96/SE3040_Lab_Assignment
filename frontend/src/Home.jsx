import React from 'react'
import { useNavigate } from 'react-router';

export default function Home() {

  let navigate = useNavigate();
  function handleNavigateCustomer() {
    navigate('/CreateProfileCustomer')
  }
  function handleNavigateTrader() {
    navigate('/CreateProfileTrader')
  }

  return (
    <div className='container'>
      <center>
        <h1>Welcome !!!</h1><br/><br/>
      <button onClick={handleNavigateCustomer}>Customer</button><br/><br/>
        <button onClick={handleNavigateTrader}>Trader</button><br/><br/>
      </center>
        
    </div>
  )
}
