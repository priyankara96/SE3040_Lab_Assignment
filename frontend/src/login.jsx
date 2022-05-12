import React from 'react'

export default function login() {
  return (
    <div className='container'>
        <form>
            <label className='form-labels'>Username</label>
            <input type='text' /><br/><br/>
            <label className='form-labels'>Password</label>
            <input type='text' /><br/><br/>
            <center><button type='submit'>Submit</button></center>
        </form>
    </div>
  )
}
