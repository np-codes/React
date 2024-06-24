import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenuData = (resId) => {
    const [resinfo, setresinfo] = useState(null);
    useEffect(() => {        
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        const response = await fetch(MENU_URL + resId);
        const json = await response.json();
        setresinfo(json.data);
    };
    return resinfo;
};

export default useRestaurantMenuData;
