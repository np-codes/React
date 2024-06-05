import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
    const [logbtn, setlogbtn] = useState("Login");
    return(
       <div className='header'>
           <div className='logo -container'>
               <img className='logo' src={LOGO_URL}/>
           </div>
           <div className='navitem'>
               <ul>
                   <li>Home</li>
                   <li>Address</li>
                   <li>Contact</li>
                   <li>Cart</li>
                   <li>
                    <button className="logbtn" onClick={()=>{
                        logbtn === "Login"? setlogbtn("Logout"):setlogbtn("Login");
                   }}>{logbtn}</button>
                   </li>
                   
               </ul>
           </div>
       </div>
    )
   }

export default Header;