import React from 'react';
import './index.css';
import 'tailwindcss/tailwind.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import Products from './components/Products.js';
import Cart from './components/Cart.js';
import SignupForm from './Pages/SignUpPage.js'
import SignInForm from './Pages/SignInPage.js';
const App = () => { 
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Navbar/>
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<SignupForm />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/Signin" element={<SignInForm />} />
              
            </Routes>
          </div>
        </BrowserRouter>
    </Provider>
  );
};

export default App;