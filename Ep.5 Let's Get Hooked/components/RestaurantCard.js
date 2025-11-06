import { CDN_URL } from "../utils/constants";


const RestaurantCard = ({ resData }) => {
    const { name, cuisines, avgRatingString, sla, cloudinaryImageId } = resData.info


    return (
        <div className="res-card">
            <img
                className="res-image"
                src={CDN_URL + cloudinaryImageId}
                alt={name}
            />
            <div className="res-card-details">
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <div className="res-card-meta">
                    <h5>{avgRatingString} ⭐</h5>
                    <h5>{sla.slaString}</h5>
                </div>
            </div>
        </div>
    );
};


export default RestaurantCard;