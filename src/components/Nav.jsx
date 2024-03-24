import React from "react";
import './Nav.css';
import Zerodha from '../assets/Zerodha.png';
const Nav =()=>{
 return(
<nav className="nav-bar">
      <img src={Zerodha} alt=""/>
        <div>
        <button className="btn_home">Home</button>
        <button className="btn_signup">Sign Up</button>
        </div>
</nav>
 );   
}
export default Nav;