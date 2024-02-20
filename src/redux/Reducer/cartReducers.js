import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constants/CartConstants";

// initial state
// let initialState = {
//   cart: {
//     cartItems:[],
//   },
// };
let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  }
}

//  add to cart reducers
export const cartReducer = ( state = {cartItems:initialState},action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      console.log(item)
      const isItemExist = state.cartItems.cart.cartItems.find(
        
        (i) => i.id === item.id
      );
      console.log('2')
      if (isItemExist) {
        console.log('3')
        return {
          ...state,
          cartItems: state.cartItems.cart.cartItems.map((i) =>
            i.id === isItemExist.id ? item : i
          ),
        };
        
      } else {
        console.log('4')
        return {
          ...state,
          cartItems: [...state.cartItems.cart.cartItems, item],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.cart.cartItems.filter((i) => i.id !== action.payload),
      };

    default:
      return state;
  }
};
