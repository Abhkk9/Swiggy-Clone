import React from 'react'
import {MENU_ITEM_IMAGE_API} from "../utils/constants";
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/store/slices/cartSlice';

function ResMenuItems(props) {
  const data = props.data;
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem(data));
  }
  return (
    <div className="menu-item-card bg-white shadow-md rounded-lg p-3 m-2 flex items-center max-w-md">
      <div className="flex-1 flex flex-col justify-center space-y-2">
        <div className="flex items-center space-x-2">
          <span
            className={`inline-block w-3 h-3 rounded-full border-2 ${
              data.isVeg
                ? "border-green-600 bg-green-600"
                : "border-red-600 bg-red-600"
            }`}
            title={data.isVeg ? "Vegetarian" : "Non-Vegetarian"}
          ></span>
          <h2 className="menu-data-name font-semibold text-base">
            {data.name}
          </h2>
        </div>
        <p className="menu-data-price text-gray-700 text-sm">
          Price: ₹{(data.finalPrice || data.defaultPrice) / 100}
        </p>
      </div>
      <div className="relative flex flex-col items-center">
        <img
          src={MENU_ITEM_IMAGE_API + data.imageId}
          alt={data.name}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <button
          className="absolute left-1/2 -translate-x-1/2 bottom-2 bg-white text-green-600 text-center px-3 py-1 rounded-md shadow-md hover:bg-gray-400 transition text-sm font-medium"
          style={{ minWidth: "60px" }}
          onClick={handleAddItem}
        >
          ADD
        </button>
      </div>
    </div>
  )
}

export default ResMenuItems

// onClick={handleAddItem}
// onClick={handleAddItem(data.name)}
// onClick={() => handleAddItem(data.name)