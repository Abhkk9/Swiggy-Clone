import React, { useEffect ,useState} from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestaurantMenuCard = function () {
  const { restId } = useParams();
  const data = useRestaurantMenu(restId || "24207");

  return (data.length===0) ? (<Shimmer />):(
    <div>
      <h1 className="text-2xl font-bold text-center my-4 p-4">
        Restaurant Menu for {data[0].restaurantName || "Unknown Restaurant"}
      </h1>
      <h3 >
        Recommended Items [{data.length}]
      </h3>
      <div className="menu-items-container flex flex-wrap justify-center gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="menu-item-card bg-white rounded-lg shadow p-4 flex flex-col items-center w-64"
          >
            <img
              src={item.imageURL}
              alt={item.name}
              className="w-40 h-40 object-cover rounded-lg mb-3"
            />
            <div className="flex items-center space-x-2 mb-2">
              <span
                className={`inline-block w-3 h-3 rounded-full border-2 ${
                  item.isVeg
                    ? "border-green-600 bg-green-600"
                    : "border-red-600 bg-red-600"
                }`}
                title={item.isVeg ? "Vegetarian" : "Non-Vegetarian"}
              ></span>
              <h2 className="menu-item-name font-semibold text-lg">
                {item.name}
              </h2>
            </div>
            <p className="menu-item-price text-gray-700">
              Price: ₹{(item.finalPrice || item.defaultPrice) / 100}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
