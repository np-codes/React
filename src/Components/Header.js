import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
    const [btn,setbtn] = useState("Login")
    return(
       <div className='header'>
           <div className='logo-container'>
               <img className='logo' src={LOGO_URL}/>
           </div>
           <div className='navitem'>
               <ul>
                   <li>Home</li>
                   <li>Address</li>
                   <li>Contact</li>
                   <li>Cart</li>
                   
                   <button className="log" onClick={()=> {
                    btn === "Login"? setbtn("Logout"):setbtn("Login");
                   }}>{btn}</button>
                   
               </ul>
           </div>
       </div>
    )
   }

export default Header;