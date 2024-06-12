import { useEffect, useState } from "react"

const useRestaurantData = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        apicall ();
    },[]);

    const apicall = async() => {
        //https://corsproxy.io/?
        const datafetch = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await datafetch.json();
        const data = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setdata(data);
    };
    
    return data;
};

export default useRestaurantData;
