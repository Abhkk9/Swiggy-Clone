export const SWIGGY_LOGO =
  "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png";

export const MENU_ITEM_IMAGE_API = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/";  

export const RES_MENU_CATEGORY = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

  export const Restaurant_MENU_API = (resId) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.570317&lng=77.3218196&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;