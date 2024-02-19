
import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../reducers/cardReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export default store;
