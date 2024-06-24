import { useDispatch ,useSelector} from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemsInCategory = ({items}) => {

    const dispatch = useDispatch();
    const handleAddItem = (items) => {
        dispatch(addItem(items));
    };
    
    return(
        <li key={items?.card?.info?.id}>
            <div className="flex justify-between w-8/12 mx-auto my-3 p-3 bg-green-300 rounded-md hover:bg-green-400 cursor-pointer shadow-lg" >
                <div className="m-3 p-3 text-xl">
                    <h2 className="font-semibold">{items?.card?.info?.name}</h2>
                    <h3>{items?.card?.info?.category}</h3>
                    <h3>Price: Rs.{(items?.card?.info?.defaultPrice || items?.card?.info?.price)/100}</h3>
                    <h3>{items?.card?.info?.description}</h3>
                </div>

                <div className="flex justify-center">
                    <button className="p-1.5 bg-white shadow-lg absolute my-36 mx-24 rounded-md text-lg font-semibold"
                        onClick={()=> handleAddItem(items)}
                    >Add +</button>
                    <img 
                        className="w-[250px] h-[200px] rounded-md object-cover"
                        src={CDN_URL+items?.card?.info?.imageId}
                    />
                </div>
            </div>
        </li>  
    );
};

export default ItemsInCategory;