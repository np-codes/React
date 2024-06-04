import RestaurantCard from "./RestaurantCard";
import data from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
    const [reslist  , setreslist] = useState(data);
    return (
        <div className='body'>
            <div className='filter'>
                <button className="toprated" onClick={()=>{
                    const filterdata = data.filter((restaurants) => restaurants.rating > 4 );
                    setreslist(filterdata)
                }}>Top Rated</button>
            </div>
            <div className='res-container'>
                {reslist.map((restaurant) => (
                    <RestaurantCard key = { restaurant.id} res = {restaurant}/>
                ))};
            </div>
        </div>

    )
}

export default Body;
