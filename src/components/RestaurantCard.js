import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const {resData} = props; // de-structuring
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;

    return (
        <div className="m-3 p-3 w-56 bg-gray-200 rounded-lg hover:bg-gray-400">
            <img className="h-48 w-full rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime}</h4>
        </div>
    );
}

// Higher order component
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white mx-4 my-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    }
}

export default RestaurantCard;