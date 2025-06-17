import { useEffect, useState } from "react";
import { Restaurant_MENU_API } from "./constants";
import { MENU_ITEM_IMAGE_API } from "./constants";

const useRestaurantMenu = (restaurantId) => {
  // const [restinfo, setRestInfo] = useState(null);
  const [recommendedItems, setRecommendedItems] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const response = await fetch(Restaurant_MENU_API(restaurantId));
    const data = await response.json();
    const resdata=data.data.cards[4].groupedCard.cardGroupMap
      .REGULAR.cards[1].card.card.itemCards;
    const transformedMenu = resdata.map((item) => ({
      name: item.card.info.name,
      finalPrice: item.card.info.finalPrice,
      defaultPrice: item.card.info.defaultPrice,
      isVeg: item.card.info.isVeg,
      id: item.card.info.id,
      imageId: item.card.info.imageId,
      imageURL: MENU_ITEM_IMAGE_API + item.card.info.imageId,
    }));
    setRecommendedItems(transformedMenu);

    // setRecommendedItems(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
  };
  return recommendedItems;
};
export default useRestaurantMenu;
