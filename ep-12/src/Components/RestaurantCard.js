import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({res}) => {
    const {
        name, 
        cuisines, 
        avgRating, 
        costForTwo, 
        cloudinaryImageId} = res.info;
    return(
        <div className=' m-4 p-4 w-[250px] h-[570px] border-2 bg-green-200 rounded-lg hover:bg-green-300 hover:border-black shadow-xl'>
            <img 
                className="rounded-lg h-[50%] w-[100%] "
                alt='res-logo'
                src={CDN_URL+cloudinaryImageId}
            />
            <div className='content mx-3 text-lg'>
                <h2 className="font-bold item-center py-2 text-lg text-center">{name}</h2>    
                <h3 className="py-1 ">Cuisines: {cuisines.join(", ")}</h3>
                <h3 className="py-1">Cost: {costForTwo}</h3>
                <h3 className="py-1">Ratings: {avgRating}</h3>
            </div>
        </div>
    );
};

export const RestaurantOpenLabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2">
                    Open
                </label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;