import React from 'react'
import { useSelector } from 'react-redux'
import ResMenuItems from "./ResMenuItems";
import { clearCart } from '../utils/store/slices/cartSlice';
import { useDispatch } from 'react-redux';
function Cart() {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    
    return (cartItems.length === 0) ? (
        <h1 className="flex items-center justify-center h-[60vh] text-2xl font-bold">Add something to cart</h1>
    ) : (
        <div className="Cart bg-gray-200 min-h-screen flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl mb-4">Cart</h1>
            <button
                className="bg-green-500 text-white px-4 py-2 rounded-md m-4"
                onClick={handleClearCart}
            >
                Clear Cart
            </button>
            <div className="Cart-items flex flex-col gap-4 p-4 w-full max-w-2xl">
                {cartItems.map((item, index) => (
                    <ResMenuItems key={index} data={item} />
                ))}
            </div>
        </div>
    )
}

export default Cart;
