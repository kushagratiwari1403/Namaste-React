import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import React from "react";


const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [masterList, setMasterList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.0458752&lng=78.8382644&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();

            console.log("Full API Response:", json);
            console.log("All Cards:", json?.data?.cards);


            let restaurants = [];

            for (let card of json?.data?.cards || []) {

                if (card?.card?.card?.id === "restaurant_grid_listing") {
                    restaurants = card?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                    console.log("Found by ID:", restaurants);
                    break;
                }


                if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                    restaurants = card?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                    console.log("Found by gridElements:", restaurants);
                    break;
                }
            }

            console.log("Total Restaurants Found:", restaurants.length);

            if (restaurants.length === 0) {
                console.error("No restaurants found! Check API response structure");
            }

            setListOfRestaurant(restaurants);
            setMasterList(restaurants);

        } catch (error) {
            console.error("Error fetching data:", error);
            setListOfRestaurant([]);
            setMasterList([]);
        }
    };


    function topRatedRestaurants() {
        let filtered = masterList.filter((restaurant) => restaurant.info.avgRating > 4.2);
        setListOfRestaurant(filtered);
    }

    function showAllRestaurants() {
        setListOfRestaurant(masterList)
    }

    return listOfRestaurant.length === 0 ? (<Shimmer />)
        : (
            <div className="container">

                <div className="filter">
                    <button className="filter-btn" onClick={topRatedRestaurants}>
                        Top Rated
                    </button>

                    <button className="show-all-btn" onClick={showAllRestaurants}>
                        Show All
                    </button>

                    <div className="search-container">
                        <input
                            type="text"
                            className="search-box"
                            placeholder="Search for restaurants..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    const filteredList = masterList.filter((restaurant) =>
                                        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                                    );
                                    setListOfRestaurant(filteredList);
                                }
                            }}
                        />
                        <button className="search-btn" onClick={() => {
                            const filteredList = masterList.filter((restaurant) =>
                                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setListOfRestaurant(filteredList);
                        }}>
                            Search
                        </button>
                    </div>
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
