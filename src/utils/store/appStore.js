import {configureStore} from '@reduxjs/toolkit'; 
import cartSlice from './slices/cartSlice'; 
const apStore = configureStore({
    reducer: {
       
         cart: cartSlice,
    },
});
export default apStore;