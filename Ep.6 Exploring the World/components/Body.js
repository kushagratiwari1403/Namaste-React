import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import React from "react";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.0458752&lng=78.8382644&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        const restaurantCard = json?.data?.cards?.find(
            (card) =>
                card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        setListOfRestaurant(
            restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        );
    };

    function topRatedRestaurants() {
        let filtered = listOfRestaurant.filter((restaurant) => restaurant.info.avgRating > 4.2);
        setListOfRestaurant(filtered);
    }



    return listOfRestaurant.length === 0 ? (<Shimmer />)
        : (
            <div className="container">

                <div className="filter">
                    <button className="filter-btn" onClick={topRatedRestaurants}>
                        Top Rated
                    </button>


                </div>

                <div className="restaurant-container">
                    {listOfRestaurant.map((restaurant) =>
                    (
                        <RestaurantCard
                            key={restaurant.info.id} resData={restaurant}
                        />
                    )
                    )}
                </div>

            </div>
        );
};

export default Body;