import React from "react";
import ResMenuItems from "./ResMenuItems";
function RestaurantMenuCard({ index,isExpanded,setisExpanded,categoryName,categoryData}) {
 
  

  return (
    <div className="menu-items-container  gap-6">
      <div
        className="flex items-center justify-between"
        onClick={() => {
          if(isExpanded !== index)
           {
          setisExpanded(index)
          }
          else {
            setisExpanded(-1);
          }
        }}
      >
        <h2 className="bold">{categoryName}</h2>
        <span role="img" aria-label="expand" className="ml-2 text-xl">
          ⬇️
        </span>
      </div>

      {(isExpanded ==index)  &&
        categoryData.map((item) => {
          return (
            <div key={item.card.info.id}>
              <ResMenuItems  key={item.card.info.id} data={item.card.info} />
            </div>
          );
        })}
    </div>
  );
}

export default RestaurantMenuCard;
