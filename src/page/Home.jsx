import React from 'react'
import "./log.css"
import { Link } from 'react-router-dom'

function Home(){
    return(
        <div class="container">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Enter username:" required/>
          <input type="password" placeholder="Enter Password:" required/>
          <Link to={"/dashboard"} className='input' style={{width:""}}>Login</Link>

    
        </form>
        <h2>Dont you have an acccont..?</h2>
      <Link to={"register"} className='input'>Register</Link>
       
      </div>
    )

}
export default Home