import { useEffect, useState } from "react";
import { Restaurant_MENU_API } from "./constants";
import { RES_MENU_CATEGORY } from "./constants";

const useRestaurantMenu = (restaurantId) => {

  const [resMenuCards, setresMenuCards] = useState([]);
  const [resDetails, setresDetails] = useState({});
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await fetch(Restaurant_MENU_API(restaurantId));
    const data = await response.json();
    const details = data.data.cards[2].card.card.info;
    setresDetails(details);
    const resdata=data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((card)=>{
      return card.card.card["@type"]== RES_MENU_CATEGORY
    });
      setresMenuCards(resdata);
    } catch (error) {
      console.error("Error fetching data:", error);
      
    }

  };
  return {resDetails,resMenuCards};
};
export default useRestaurantMenu;
