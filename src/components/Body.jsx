import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import ThemeContext from "../utils/ThemeContext";
import AddressContext from "../utils/AddressContext";

// import restList from "../utils/mockData/resList";

const Body = () => {
  const [filteredRestList, setFilteredRestList] = useState([]);
  const [apiRestList, setapiRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { theme } = useContext(ThemeContext);
  const { selectedAddress } = useContext(AddressContext);

  useEffect(() => {
    fetchdata();
  }, [selectedAddress]); 

  useEffect(() => {
    setFilteredRestList(filteredRestList);
  }, [searchText]);

  const fetchdata = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${selectedAddress.lat}&lng=${selectedAddress.lng}&page_type=DESKTOP_WEB_LISTING`
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const json = await response.json();
      const restaurants =
          
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setFilteredRestList(restaurants);
      setapiRestList(restaurants);
    } catch (error) {
      setFilteredRestList([]);
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const filteredList = apiRestList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestList(filteredList);
  };

  const handleTopRated = () => {
    const filteredList = filteredRestList.filter(
      (restaurant) => restaurant.info.avgRatingString >= "4.5"
    );
    setFilteredRestList(filteredList);
  };

  return (
    <div className={`body ${theme === "dark" ? "bg-gray-400 text-white" : ""}`}>
      <div className=" p-1  ">
        <div className="flex flex-col sm:flex-row items-center gap-1 mb-3">
          <input
            type="text"
            placeholder="Search for food items"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 w-64"
          />
          <button
            className="px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="px-5 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            onClick={handleTopRated}
          >
            Top Rated Restaurant
          </button>
        </div>
        <h1 className="restaurant-list-title">Restaurant List</h1>
      </div>

      <div className="restaurant-list">
        {filteredRestList.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestList.map((restaurant) => (
            
            <Link
              to={`/restaurants/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
            <RestaurantCard key={restaurant.info.id} resdata={restaurant} />
            </Link>

          ))
        )}
      </div>
    </div>
  );
};

export default Body;
