//Action types
const ADD_PRODUCT = 'cart/ADD_PRODUCT';
const REMOVE_PRODUCT = 'cart/REMOVE_PRODUCT';
const CHECKOUT = 'cart/CHECKOUT';

//initialState
const initialState = {
  productsInCart: [],
  runningTotal: 0
};
console.log(initialState)
//reducer to handle action types
export default function reducer( state = initialState, action ) {
  switch( action.type ) {
    case ADD_PRODUCT:
      return {
        productsInCart: [ ...state.productsInCart, action.product ],
        runningTotal: state.runningTotal + action.product.price
      };
    case REMOVE_PRODUCT:
      return {
        productsInCart: state.productsInCart.filter( product => product._id !== action.product._id),
        runningTotal: state.runningTotal - action.product.price
      };
    case CHECKOUT:
      return initialState;
  }
//reducer must return a state object
  return state;
}


// Action creators
export function addProduct( product ) {
  return { type: ADD_PRODUCT, product };
}

export function removeProduct( product ) {
  return { type: REMOVE_PRODUCT, product };
}

export function checkout() {
  return { type: CHECKOUT };
}
