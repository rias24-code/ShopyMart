import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice'
import productsReducer from '../features/products/productsSlice'
import wishlistReducer from '../features/wishlist/wishlistSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
