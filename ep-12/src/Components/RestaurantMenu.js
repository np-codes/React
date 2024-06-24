import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
import MenuCategories from "./MenuCategories";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resinfo = useRestaurantMenuData(resId);    
    const [categoryIndex,setcategoryIndex] = useState(null)
    
    if(resinfo === null) return <Shimmer/>;

    const{name,cuisines,costForTwoMessage,avgRating} = resinfo?.cards[2]?.card?.card?.info;
    const categories = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((items) => items.card?.card?.title);


    return(
        <div className="Menu justify-center m-4 p-4">
            <div className="justify-center text-center text-2xl m-3 p-3">
                <h1 className="font-extrabold text-4xl my-3">{name}</h1>
                <h3 className="my-1">Cuisines: {cuisines.join(" , ")}</h3>
                <h3 className="my-1">Price: {costForTwoMessage}</h3>
                <h3 className="my-1">Ratings: {avgRating}</h3>
            </div>

            {categories.map((optionstitle,index)=>
                <MenuCategories 
                    category = {optionstitle.card.card} 
                    key={index}
                    showoptions={index === categoryIndex? true:false}
                    setvisibility = {()=>setcategoryIndex(index===categoryIndex? null : index)}
                />
            )}
        </div>
    )
};

export default RestaurantMenu;