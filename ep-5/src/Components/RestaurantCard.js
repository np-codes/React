const RestaurantCard = ({res}) => {
    const {image,title, type, rating} = res;
    return(
        <div className='card'>
            <img 
                className='res-logo'
                alt='res-logo'
                src={image}
            />
            <div className='content'>
                <h2>{title}</h2>    
                <h3>Type: {type.join(", ")}</h3>
                <h3>Ratings: {rating}</h3>
            </div>
        </div>
    )
}

export default RestaurantCard;