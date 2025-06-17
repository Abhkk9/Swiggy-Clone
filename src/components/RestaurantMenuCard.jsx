import React from 'react'

function RestaurantMenuCard() {
    // const getRestaurantMenu= () => {
    //     const  datajs= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.570317&lng=77.3218196&restaurantId=223412&catalog_qa=undefined&submitAction=ENTER").then((d)=>d.json());
    //     data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[2].card.info.name
    // }
  return (
    <div>
      Balle Balle! This is Restaurant Menu Card Component
      <h1>Restaurant Menu Card</h1>
      <p>Here you can find the menu of your favorite restaurant.</p>
      <button className="menu-button">View Menu</button>
    </div>
  )
}

export default RestaurantMenuCard
