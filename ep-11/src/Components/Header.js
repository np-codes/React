import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useStatusCheck from "../utils/useStatusCheck";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [logbtn, setlogbtn] = useState("Login");
    const internet = useStatusCheck();
    const {LoggedInUser} = useContext(UserContext); //----- calling for UserContext from utils

    return(
        <div className='flex items-start justify-between text-center bg-pink-100 shadow-lg'>
            <div className='logo -container'>
               <img className='h-40' src={LOGO_URL}/>
            </div>
            <div className='navitem'>
               <ul className="flex p-16 mx-3">
                    <li className="px-5 font-bold text-xl">Status:{internet? "🙂": "😖"}</li>
                    <li className="px-5 font-bold text-xl"><Link to={'/'}>Home</Link></li>
                    <li className="px-5 font-bold text-xl"><Link to={'/about'}>About Us</Link></li>
                    <li className="px-5 font-bold text-xl"><Link to={'/contact'}>Contact</Link></li>
                    <li className="px-5 font-bold text-xl"><Link to={'/grocery'}>Grocery</Link></li>
                    <li className="px-5 font-bold text-xl">Cart</li>
                    <li className="px-5 font-bold text-xl">
                        <button className="border-2 px-4 bg-green-200 rounded-xl shadow-lg" 
                            onClick={()=>{
                                logbtn === "Login"? setlogbtn("Logout"):setlogbtn("Login");
                            }}
                        >{logbtn}
                        </button>
                        <h3>{LoggedInUser}</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;