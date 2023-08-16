import React from 'react'
import {Link} from "react-router-dom";
import "./navbar.css"
const sidelogo = require("../../images/black-bg.png")




export default function Navbar() {
  
  return (
    <div>
      <navbar>
        <nav id='uppernavbar'>
          <div id='sidelogo'>
        <Link to="/">   <img src={sidelogo} alt="sidelog" /></Link>  
          </div>
          <div className='parent_sidelist'>
            <p>Menu</p>
            <div className='sidelist'> 
              <ul >




           <Link to="/">   <li>  Home </li></Link>  
           <Link to="/about"><li>About </li></Link>
         <Link to="/service">  <li>Services</li></Link>
                <Link to="/gallery"> <li>Gallery</li></Link>
                <Link to="/contact"> <li>Contact</li></Link>

                <Link to="/login">         <li> Login</li></Link>
                <Link to="/signup"> <li>Signup</li></Link>


              </ul>
            </div>
          </div>
        </nav>


      </navbar>
    </div>
  )
}
