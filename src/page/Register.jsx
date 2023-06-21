import React from 'react'
import "./reg.css"
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <div class="container">
    <h2>Registration Form</h2>
    <form id="registration-form" action="#" method="post">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required/>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" required/>
      </div>
      <div class="form-group">
     <Link to={"/"}><input type="submit" value="Register"/></Link> 
      </div>
    </form>
  </div>
  )
}
