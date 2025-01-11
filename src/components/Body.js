import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
        return <h1>Looks like you're offline!!! Please check your internet connection.</h1>

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="m-3 p-3">
                    <input 
                        type="text" 
                        data-testid="searchInput"
                        className="border-solid border-black border-2 rounded-lg" value={searchText} onChange={(event) => {
                        setSearchText(event.target.value);
                    }}/>
                    <button className="px-4 py-1 m-2 bg-red-400 rounded-lg"
                    onClick={() => {
                        const filteredRes = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRes);
                    }}>
                        Search
                    </button>
                </div>
                <div className="m-3 p-3">
                    <button className="px-4 py-1 m-2 bg-gray-200 rounded-lg" onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter(res => res.info.avgRating > 4.5)
                        setFilteredRestaurant(filteredRestaurants);
                    }}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
            {
                filteredRestaurant.map((restaurant) => (
                    <Link className="linkStyle" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        {
                            restaurant.info.id%2 === 0 ? (<RestaurantCardPromoted resData={restaurant}/>) : (<RestaurantCard resData={restaurant}/>)
                        }
                    </Link>
                ))
            }
            </div>
        </div>
    );
}

export default Body;