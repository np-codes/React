import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_URL } from "../utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resinfo,setresinfo] = useState(null);
    const [isvisible,setisvisible] = useState(false)
    const {resId} = useParams();

    const fetchapi = async() => {
        const apicall = await fetch (MENU_URL+resId);
        const json = await apicall.json();
        setresinfo(json?.data);
    };

    useEffect(()=> {
        fetchapi();
    },[]);

    if(resinfo === null) return <Shimmer/>;
    const{name,cuisines,costForTwoMessage,avgRating} = resinfo?.cards[2]?.card?.card?.info;

   /* const itemcard = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;*/
    const optionslist = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((items) => items?.card?.card?.title);
    
    const visibility = (index) => {
        setisvisible(prevState => ({
            ...prevState,
            [index]:!prevState[index]
    }));
    }
    
    return(
        <div className="Menu">
            <div className="Menuhead">
            <h1>{name}</h1>
            <h3>Cuisines: {cuisines.join(" , ")}</h3>
            <h3>Price: {costForTwoMessage}</h3>
            <h3>Ratings: {avgRating}</h3>
            </div>

            {optionslist.map((optionstitle,index)=> 
            <ul className="Optionslist" key = {index}>
                <div className="Optionslist-bar">
                    <h1>{optionstitle.card.card.title}</h1>
                    <h2 onClick={()=> visibility(index)}>
                        {isvisible[index]? "Λ" : "V"}</h2>
                </div>
                
                {isvisible[index] && optionstitle?.card?.card?.itemCards?.map((iteam) =>
                <li key={iteam?.card?.info?.id}>
                    <div className="Single-item-card" >
                        <div className="Item-details">
                            <h2>{iteam?.card?.info?.name}</h2>
                            <h3>{iteam?.card?.info?.category}</h3>
                            <h3>Price: Rs.{(iteam?.card?.info?.defaultPrice || iteam?.card?.info?.price)/100}</h3>
                            <h3>{iteam?.card?.info?.description}</h3>
                        </div>
                        <img 
                            className="Itemimg"
                            src={CDN_URL+iteam?.card?.info?.imageId}
                        />
                    </div>
                </li>  )}
            </ul>)}
        </div>
    )
};

export default RestaurantMenu;