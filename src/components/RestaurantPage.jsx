import React, { useEffect, useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestaurantPage = function () {
  const { restId } = useParams();
  const obj = useRestaurantMenu(restId || "24207");
  // obj is an object containing restaurant details and menu cards {resDetails ,resMenuCards}


  return obj.resMenuCards.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-page-container p-4 bg-gray-100 ">
      <h1 className="text-4xl font-bold text-center my-4 p-4">
        {obj.resDetails.name || "Unknown Restaurant"}
      </h1>

      <div className="menu-items-container  justify-center gap-4 my-4 p-4 grid">
        {
          obj.resMenuCards.map((item, index) => (
          <div key={index} className="menu-category-card bg-white shadow-md rounded-lg p-4 m-2 w-500">
            
            
            <RestaurantMenuCard
              key={item.card.card.categoryId}
              categoryName={item.card.card.title}
              categoryData={item.card.card.itemCards}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
