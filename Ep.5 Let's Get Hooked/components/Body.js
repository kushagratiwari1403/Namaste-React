import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockdata";
import { useState } from "react";
import React from "react";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState(restaurantsList);

    function topRatedRestaurants() {
        let filtered = listOfRestaurant.filter((restaurant) => restaurant.info.avgRating > 4.2);
        setListOfRestaurant(filtered);
    }

    return (
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