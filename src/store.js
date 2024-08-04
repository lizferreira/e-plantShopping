import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

 const store = configureStore({
    reducer: {
        cart: cartReducer, //estado del carrito
    },
});
export default store