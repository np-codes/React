import { useState } from "react";
import ItemsInCategory from "./ItemsInCategory";


const MenuCategories = ({category,showoptions,setvisibility}) => {
    
    const handleclick = () => {
        setvisibility();
    }
    //category.card.card.title
    return(
        <ul className="" >
            
            <div className="w-6/12 mx-auto my-5 bg-gray-100 p-4 px-20 rounded-md  flex justify-between font-semibold text-xl shadow-lg hover:bg-gray-200 ">
                <span>{category.title} ({category?.itemCards?.length})</span>
                <span className="hover:cursor-pointer"
                    onClick={handleclick}>
                        {showoptions? "⬆️" : "⬇️"}
                </span>
            </div>
            {showoptions && category?.itemCards?.map((item) =>
                <ItemsInCategory items = {item} key={item?.card?.info?.id}/>
            )}
                    
        </ul>
    );
};

export default MenuCategories;