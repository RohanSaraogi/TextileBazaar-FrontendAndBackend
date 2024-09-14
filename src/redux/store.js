import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { sellerReducer } from "./reducers/seller";
import { productReducer } from "./reducers/product";
import { eventReducer } from "./reducers/event";
import { cartReducer } from "./reducers/cart";
import { wishlistReducer } from "./reducers/wishlist";
import { orderReducer } from "./reducers/order";
import dailyPriceReducer  from './reducers/dailyprice';
import advertisementReducer from './reducers/advertisment'
import subscriptionReducer  from './reducers/subscriptionReducer'


const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    products: productReducer,
    events: eventReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    order: orderReducer,
    dailyPrices : dailyPriceReducer,
    advertisements : advertisementReducer,
    subscription: subscriptionReducer
  },
});

export default Store;
