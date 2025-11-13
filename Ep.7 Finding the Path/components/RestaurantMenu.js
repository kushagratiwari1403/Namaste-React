import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import restaurantData from "../public/data.json";


const RestaurantMenu = () => {

    const { resId } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        const restaurantInfo = restaurantData.restaurants.find(
            (res) => res.resId == resId);

        setRestaurant(restaurantInfo)
    }, [resId])

    if (!restaurant) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <h2>Location: {restaurant.location}</h2>
            <h3>Rating: {restaurant.rating}</h3>
            <h4>Menu:</h4>
            <ul>
                {restaurant.menu.map((item) => (
                    <li key={item.id}>
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        <p>Price: ₹{item.price}</p>
                        <img src={item.image} alt={item.name} width={100} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;








// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import restaurantData from "../public/data.json"; // Adjust path based on your structure

// const RestaurantMenu = () => {
//     const { resId } = useParams();
//     const [restaurant, setRestaurant] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         try {
//             const restaurantInfo = restaurantData.restaurants.find(
//                 (res) => res.resId == resId
//             );

//             if (!restaurantInfo) {
//                 throw new Error("Restaurant not found!");
//             }

//             setRestaurant(restaurantInfo);
//         } catch (err) {
//             setError(err.message);
//             console.error("Error loadings data:", err);
//         }
//     }, [resId]);

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     if (!restaurant) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h1>{restaurant.name}</h1>
//             <h2>Location: {restaurant.location}</h2>
//             <h3>Rating: {restaurant.rating}</h3>
//             <h4>Menu:</h4>
//             <ul>
//                 {restaurant.menu.map((item) => (
//                     <li key={item.id}>
//                         <h5>{item.name}</h5>
//                         <p>{item.description}</p>
//                         <p>Price: ₹{item.price}</p>
//                         <img src={item.image} alt={item.name} width={100} />
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default RestaurantMenu;


