// src/redux/actions/authActions.js
import { actionTypes } from '../constants/action-types';

// Action Creators
const signupRequest = () => ({
  type: actionTypes.SIGNUP_REQUEST 
});

const signupSuccess = (user) => ({
  type: actionTypes.SIGNUP_SUCCESS,
  payload: user
});

const signupFailure = (error) => ({
  type: actionTypes.SIGNUP_FAILURE,
  payload: error
});

const signinRequest = () => ({
  type: actionTypes.SIGNIN_REQUEST
});

const signinSuccess = (user) => ({
  type: actionTypes.SIGNIN_SUCCESS,
  payload: user
});

const signinFailure = (error) => ({
  type: actionTypes.SIGNIN_FAILURE,
  payload: error
});

// Async Actions
const signupUser = (userData) => async (dispatch) => {
  try {
    dispatch(signupRequest());
    
    const response = await fetch('https://reqres.in/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error.includes('Only defined users') 
          ? 'Use test credentials: eve.holt@reqres.in / pistol'
          : data.error
      );
    }

    const mockUser = {
      ...data,
      firstName: userData.firstName || 'Mock',
      lastName: userData.lastName || 'User'
    };

    dispatch(signupSuccess(mockUser));
    return mockUser;

  } catch (error) {
    dispatch(signupFailure(error.message));
    throw error;
  }
};

const signinUser = (credentials) => async (dispatch) => {
  try {
    dispatch(signinRequest());
    
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Login failed');
    }

    const mockUser = {
      id: 4,
      token: data.token,
      firstName: 'Mock',
      lastName: 'User',
      email: credentials.email
    };

    dispatch(signinSuccess(mockUser));
    return mockUser;

  } catch (error) {
    dispatch(signinFailure(error.message));
    throw error;
  }
};

// Export all actions
export {
  signupRequest,
  signupSuccess,
  signupFailure,
  signinRequest,
  signinSuccess,
  signinFailure,
  signupUser,
  signinUser
};