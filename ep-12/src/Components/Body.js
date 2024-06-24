import RestaurantCard, {RestaurantOpenLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";
import useStatusCheck from "../utils/useStatusCheck";
import UserContext from "../utils/UserContext";

const Body = () => {
    
    const [filteredlist  , setfilteredlist] = useState([]);
    const [searchtext , setsearchtext] = useState("");
    const [originallist , setoriginallist] = useState([]);
    const data = useRestaurantData();

    const internet = useStatusCheck();
    const RestaurantOpen = RestaurantOpenLabel(RestaurantCard)

    const {setusername,LoggedInUser} = useContext(UserContext);
    const [updatename,setupdatename] = useState(LoggedInUser);
    const handleclick = () => {
        setusername(updatename);
    }
    
    useEffect(() => {
        setoriginallist(data);
        setfilteredlist(data);
    },[data]);

    if (!internet) return<h1>Please check your internet connection...</h1>;

    return filteredlist?.length===0 ? (<Shimmer/>):(
        <div className='body'>
            <div className='flex justify-center items-center m-5 p-5'>
                <div className=" mx-3 ">
                    <input 
                        className="border-solid border-black border-2 rounded-xl" 
                        value={searchtext} 
                        onChange={(e)=>{
                            setsearchtext(e.target.value);
                        }} >
                    </input>
                    <button 
                        className="searchbtn px-5 py-0.5 m-3 bg-lime-300 font-semibold border-solid border-black border-2 rounded-xl hover:border-4" 
                        onClick={()=>{
                            const searchres = originallist.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                            setfilteredlist(searchres);
                        }}
                        >Search
                    </button>
                </div>

                <div className="mx-3 ">
                    <button 
                        className="toprated px-4 py-0.5 m-3 bg-lime-300 font-semibold border-solid border-black border-2 rounded-xl hover:border-4" 
                        onClick={()=>{
                            const filterdata = filteredlist.filter((restaurants) => restaurants.info.avgRating > 4 );
                            setfilteredlist(filterdata)
                        }}
                        >Top Rated
                    </button>
                </div>
                
                <div className="changename">
                    <label
                        className="px-5 py-0.5 m-3 bg-lime-300 font-semibold border-solid border-black border-2 rounded-xl hover:border-4"
                        onClick={handleclick}
                        >ClicktoChange
                    </label>
                    <input 
                        className="border-solid border-black border-2 rounded-xl" 
                        value= {updatename}
                        onChange={(e)=> {
                            setupdatename(e.target.value)
                        }}
                    >
                    </input>
                    
                </div>
                
            </div>
            <div className='flex flex-wrap items-center justify-center'>
                {filteredlist?.map((restaurant) => (
                    <Link 
                        className="cardlink"
                        key = { restaurant.info.id} 
                        to={'/restaurants/'+ restaurant.info.id}
                        >
                            {restaurant.info.isOpen?(<RestaurantOpen res = {restaurant}/>) : (<RestaurantCard  res = {restaurant}/>)}
                        
                    </Link>
                ))}
            </div>
        </div>

    )
}

export default Body;
