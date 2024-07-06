import { useDispatch, useSelector } from "react-redux"
import { removeItem,clearCart } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";

const Cart = () => {
    const cartitems = useSelector((sto)=> sto.cart.cartitems)
    const dispatch = useDispatch();
    
    handleRemoveItem = (item) =>{
        dispatch(removeItem(item));
    }; 

    handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div>
            <div  className="text-center py-3 m-4" >
                <h1 className="font-bold text-6xl">Cart</h1>
            </div>
            { cartitems.length === 0? (<h1 className="text-center font-semibold text-2xl"> The Cart is Empty....</h1>
            ) : (   
                <div>
                    <div className="text-center">
                        <button 
                            className=" shadow-lg border-black border-solid border-2 px-2 py-1 text-lg font-semibold bg-green-300 rounded-lg"
                            onClick={() => handleClearCart()}
                        >
                            Clear Cart
                        </button>
                    </div>
                    {cartitems.map((item)=>( 
                        <div data-testid="fooditemincart" key={item?.card?.info?.id}  className="flex justify-between w-8/12 mx-auto my-3 p-3 bg-green-300 rounded-md hover:bg-green-400 cursor-pointer shadow-lg" >
                            <div className="m-3 p-3 text-xl">
                                <h2 className="font-semibold">{item?.card?.info?.name}</h2>
                                <h3>{item?.card?.info?.category}</h3>
                                <h3>Price: Rs.{(item?.card?.info?.defaultPrice || item?.card?.info?.price)/100}</h3>
                                <h3>{item?.card?.info?.description}</h3>
                            </div>
                            <div className="flex justify-center">
                                    <button data-testid="rmbtn" className="p-1.5 bg-white shadow-lg absolute my-36 mx-24 rounded-md text-lg font-semibold"
                                        onClick={()=> handleRemoveItem(item)}
                                    >Remove</button>
                                    <img 
                                        className="w-[250px] h-[200px] rounded-md object-cover"
                                        src={CDN_URL+item?.card?.info?.imageId}
                                    />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
};

export default Cart;