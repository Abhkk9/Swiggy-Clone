export const SWIGGY_LOGO =
  "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png";
  
  export const getRestaurantMenuUrl = (resId) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.570317&lng=77.3218196&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;