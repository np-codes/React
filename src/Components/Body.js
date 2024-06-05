import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [reslist  , setreslist] = useState([]);
    const [filterrestaurants, setfilterrestaurants] = useState([])
    const [searchtext, setsearchtext] = useState("");

    const useapi = async() => {
        const fetchdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await fetchdata.json();
        const data = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setreslist(data);
        setfilterrestaurants(data);
    };

    useEffect (() => {
        useapi();
    }, []);

    return reslist.length === 0? <Shimmer/> : (
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input type="text" className="searchbox"
                        value={searchtext}
                        onChange={(e) => {
                            setsearchtext(e.target.value);
                            console.log(e);
                        }}
                    />
                    <button className="searchbtn" onClick={()=> {
                        const searchfiltered = reslist.filter(
                            (res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                        );
                        setfilterrestaurants(searchfiltered);
                    }}
                    >Search</button>

                </div>

                <button className="toprated" onClick={()=>{
                    const topratedfilter = reslist.filter((restaurants) => restaurants.info.avgRating > 4 );
                    setfilterrestaurants(topratedfilter)
                }}>Top Rated</button>
            </div>

            <div className='res-container'>
                {filterrestaurants.map((restaurant) => (
                    <RestaurantCard key = {restaurant.info.id} res = {restaurant}/>
                ))}
            </div>
        </div>

    )
}

export default Body;
