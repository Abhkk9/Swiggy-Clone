const RestaurantCard = (props) => {
  // console.log(...props);
  return (
    <div className="restaurant-card">
      <div key={props.resdata.info.id} className="restaurant-item">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            props.resdata.info.cloudinaryImageId
          }
          alt={props.resdata.info.name}
        />
        <h2>{props.resdata.info.name}</h2>
        <p>
          {props.resdata.info.locality}, {props.resdata.info.areaName}
        </p>
        <p>{props.resdata.info.cuisines.join(", ")}</p>
        <p>{props.resdata.info.costForTwo}</p>
        <p>Rating: {props.resdata.info.avgRatingString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;