import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useStatusCheck from "../utils/useStatusCheck";

const Header = () => {
    const [logbtn, setlogbtn] = useState("Login");
    const internet = useStatusCheck();
    return(
        <div className='header'>
            <div className='logo -container'>
               <img className='logo' src={LOGO_URL}/>
            </div>
            <div className='navitem'>
               <ul>
                    <li>Status {internet? "🙂": "😖"}</li>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/grocery'}>Grocery</Link></li>
                    <li>Cart</li>
                    <li>
                        <button className="logbtn" 
                            onClick={()=>{
                                logbtn === "Login"? setlogbtn("Logout"):setlogbtn("Login");
                            }}
                        >{logbtn}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;