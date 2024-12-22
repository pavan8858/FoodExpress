import { LOGO_URL, logo_url } from "../utils/constants";
import { useState } from "react";
const Header = ()=>{
  
  const [btnNameReact,setbtnNameReact] = useState("Login");
  return(
  <div className="header">
    <div className="logo-container">
        <img className="logo" 
        src= {LOGO_URL}
        alt="abc"/>
    </div>
    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About Us </li>
            <li>Contact Us </li>
            <li>Cart</li>
            <button type="button" className="btn btn-success"
            onClick={()=>{
              btnNameReact === "Login" ?
              setbtnNameReact("Logout")
              :setbtnNameReact("Login");
            }}>{btnNameReact}</button>
           
        </ul>
        
    </div>
  </div>
    );   
  };
  export default Header;

