import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import restList from "../utils/mockData/resList";

const Body = () => {
  const [filteredRestList, setFilteredRestList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    setFilteredRestList(filteredRestList);
  }, [searchText]);

  const fetchdata = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const json = await response.json();
      const restaurants =
          
        json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setFilteredRestList(restaurants);
    } catch (error) {
      setFilteredRestList([]);
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const filteredList = restList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestList(filteredList);
  };

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for food items"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>

        <button
          className="4*Orless-button"
          onClick={() => {
            const filteredList = filteredRestList.filter(
              (restaurant) => restaurant.info.avgRatingString >= "4.5"
            );
            setFilteredRestList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <h1 className="restaurant-list-title">Restaurant List</h1>
      </div>

      <div className="restaurant-list">
        {filteredRestList.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resdata={restaurant} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
