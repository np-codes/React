import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({res}) => {
    const {
        name, 
        cuisines, 
        avgRating, 
        costForTwo, 
        cloudinaryImageId} = res.info;

    return(
        <div className='card'>
            <img 
                className='res-logo'
                alt='res-logo'
                src={CDN_URL+cloudinaryImageId}
            />
            <div className='content'>
                <h2>{name}</h2>    
                <h3>Cuisines: {cuisines.join(", ")}</h3>
                <h3>Cost: {costForTwo}</h3>
                <h3>Ratings: {avgRating}</h3>
            </div>
        </div>
    )
}

export default RestaurantCard;