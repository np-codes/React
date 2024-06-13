import { useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";

const RestaurantMenu = () => {

    const [isvisible,setisvisible] = useState(false)
    const {resId} = useParams();
    const resinfo = useRestaurantMenuData(resId)

    if(resinfo === null) return <Shimmer/>;

    const{name,cuisines,costForTwoMessage,avgRating} = resinfo?.cards[2]?.card?.card?.info;
    const optionslist = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((items) => items?.card?.card?.title);

   /* const itemcard = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;*/
    
    const visibility = (index) => {
        setisvisible(prevState => ({
            ...prevState,
            [index]:!prevState[index]
    }));
    }
    
    return(
        <div className="Menu justify-center m-4 p-4">
            <div className="justify-center text-center text-2xl m-3 p-3">
                <h1 className="font-extrabold text-4xl my-3">{name}</h1>
                <h3 className="my-1">Cuisines: {cuisines.join(" , ")}</h3>
                <h3 className="my-1">Price: {costForTwoMessage}</h3>
                <h3 className="my-1">Ratings: {avgRating}</h3>
            </div>

            {optionslist.map((optionstitle,index)=> 
                <ul className="mx-52" key = {index}>
                    <div className="bg-orange-300 m-5 mx-20 p-4 px-20  flex justify-between font-semibold text-xl shadow-lg hover:bg-orange-400 ">
                        <h1>{optionstitle.card.card.title}</h1>
                        <h2 className="hover:cursor-pointer"
                            onClick={()=> visibility(index)}>
                                {isvisible[index]? "Λ" : "V"}
                        </h2>
                    </div>
                    
                    {isvisible[index] && optionstitle?.card?.card?.itemCards?.map((iteam) =>
                        <li key={iteam?.card?.info?.id}>
                            <div className="flex justify-between m-3 p-3 bg-green-300 hover:bg-green-400 cursor-pointer shadow-lg" >
                                <div className="m-3 p-3 text-xl">
                                    <h2 className="font-semibold">{iteam?.card?.info?.name}</h2>
                                    <h3>{iteam?.card?.info?.category}</h3>
                                    <h3>Price: Rs.{(iteam?.card?.info?.defaultPrice || iteam?.card?.info?.price)/100}</h3>
                                    <h3>{iteam?.card?.info?.description}</h3>
                                </div>
                                <img 
                                    className="w-[200px] h-[200px]"
                                    src={CDN_URL+iteam?.card?.info?.imageId}
                                />
                            </div>
                        </li>  
                    )}
                </ul>
            )}
        </div>
    )
};

export default RestaurantMenu;