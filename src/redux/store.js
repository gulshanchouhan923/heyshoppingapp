import {configureStore,combineReducers   } from "@reduxjs/toolkit";
import { cartReducer } from "./Reducer/cartReducers";



const rootReducre = combineReducers({
   cart: cartReducer,
})

const store = configureStore({
   reducer:{
    rootReducre,

   },
})

export default store;