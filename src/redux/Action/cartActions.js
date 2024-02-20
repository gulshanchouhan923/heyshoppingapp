
import {REMOVE_FROM_CART,ADD_TO_CART} from '../Constants/CartConstants'

// cart action

export const cartAction = (id, name,price,image) => async (dispatch, getState) => {
    console.log(id, name,price,image)
    dispatch({
        type: ADD_TO_CART,
        payload: {
            id:id,
          name:name,
          price:price,
          image:image
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().rootReducre.cart.cartItems));
}


// remove cart action

export const cartRemoveAction = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().rootReducre.cart.cartItems));
}