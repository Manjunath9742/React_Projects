// redux/reducers/productReducer.js
import { actionTypes } from '../constants/action-types';

const initialState = {
  products: [],
  cart: []
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
  const existingItem = state.cart.find(item => item.id === action.payload.id);
  
  if (existingItem) {
    // If item already exists, increase quantity
    return {
      ...state,
      cart: state.cart.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    };
  } else {
    // If new item, add with quantity 1
    return {
      ...state,
      cart: [...state.cart, { ...action.payload, quantity: 1 }]
    };
  };

  case actionTypes.DECREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item => 
          item.id === action.payload  // Note: payload is just the ID
            ? { 
                ...item, 
                quantity: Math.max(0, (item.quantity || 1) - 1) // Never goes below 0
              }
            : item
        ).filter(item => item.quantity > 0) // Remove items with 0 quantity
      };
       
  
  case actionTypes.REMOVE_FROM_CART:
      // Change this line to use action.payload directly (not action.payload.id)
      return { 
        ...state, 
        cart: state.cart.filter((product) => product.id !== action.payload)
      };
    default:
      return state;
  }
};