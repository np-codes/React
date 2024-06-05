import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [filteredlist  , setfilteredlist] = useState([]);
    const [searchtext , setsearchtext] = useState("");
    const [originallist , setoriginallist] = useState([]);
    
    const apicall = async() => {
        const fetchdata = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await fetchdata.json();
        const data = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(data);
        setfilteredlist(data);
        setoriginallist(data);
    };

    useEffect(()=>{
        apicall();
    },[]);

    return filteredlist.length===0 ? (<Shimmer/>):(
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input className="searchbar" value={searchtext} onChange={(e)=>{
                        setsearchtext(e.target.value);
                    }} ></input>
                    <button className="searchbtn" onClick={()=>{
                        const searchres = originallist.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchtext.toLowerCase())
                    );
                    setfilteredlist(searchres);
                    }}>Search</button>
                </div>
                <button className="toprated" onClick={()=>{
                    const filterdata = data.filter((restaurants) => restaurants.info.avgRating > 4 );
                    setfilteredlist(filterdata)
                }}>Top Rated</button>
            </div>
            <div className='res-container'>
                {filteredlist.map((restaurant) => (
                    <RestaurantCard key = { restaurant.info.id} res = {restaurant}/>
                ))}
            </div>
        </div>

    )
}

export default Body;
