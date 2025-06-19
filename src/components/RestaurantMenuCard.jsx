import React from "react";
import ResMenuItems from "./ResMenuItems";
function RestaurantMenuCard(props) {
  const { categoryData, categoryName } = props;
  const [isExpanded, setisExpanded] = React.useState(false);

  return (
    <div className="menu-items-container  gap-6">
      <div
        className="flex items-center justify-between"
        onClick={() => setisExpanded((prev) => !prev)}
      >
        <h2 className="bold">{categoryName}</h2>
        <span role="img" aria-label="expand" className="ml-2 text-xl">
          ⬇️
        </span>
      </div>

      {isExpanded &&
        categoryData.map((item) => {
          return (
            <div key={item.card.info.id}>
              <ResMenuItems key={item.card.info.id} data={item.card.info} />
            </div>
          );
        })}
    </div>
  );
}

export default RestaurantMenuCard;
