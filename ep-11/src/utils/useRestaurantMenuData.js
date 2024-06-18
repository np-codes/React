import { useEffect, useState } from "react"
import { MENU_URL } from "./constant";

const useRestaurantMenuData = (resId) => {
    
    const [resinfo,setresinfo] = useState(null);

    useEffect(()=>{
        fetchapi();
    },[]);

    const fetchapi = async() => {
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        setresinfo(json?.data);
    };

    return resinfo;
};

export default useRestaurantMenuData;