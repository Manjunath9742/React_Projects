// src/redux/reducer/index.js
import { combineReducers } from 'redux';
import productReducer from './productReducer';
import authReducer from './authReducer'; // Import other reducers as needed

const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer // Add other reducers here
  // Add more reducers as your app grows
});

export default rootReducer;