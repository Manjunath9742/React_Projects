// src/redux/reducers/authReducer.js
import { actionTypes } from '../constants/action-types';

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Shared request state
    case actionTypes.SIGNUP_REQUEST:
    case actionTypes.SIGNIN_REQUEST:
      return { 
        ...state, 
        loading: true, 
        error: null 
      };

    // Successful signup
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
        error: null
      };

    // Successful signin
    case actionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
        error: null
      };

    // Failed signup
    case actionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        user: null,
        isAuthenticated: false,
        error: action.payload
      };

    // Failed signin
    case actionTypes.SIGNIN_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload
      };

    // Sign out
    case actionTypes.SIGNOUT:
      return initialState;

    default:
      return state;
  }
};