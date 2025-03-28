import React from "react";
import { useEffect,useSelector, useDispatch } from "react-redux";
// import { handleCheckout } from "../redux/actions/products";
import { actionTypes } from "../redux/constants/action-types";


const Cart = () => {

  const cartItems = useSelector((state) => state.products.cart || []);
  const dispatch = useDispatch();

  // Calculate total price considering quantities
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price * (item.quantity || 1)),
    0
  );

  const handleRemoveFromCart = (productId) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: productId
    });
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: { id: productId } // Or pass full product if needed
    });
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch({
      type: actionTypes.DECREMENT_QUANTITY,
      payload: productId
    });
  };

  const onCheckout = () => {
    dispatch(handleCheckout());
  };



  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">Your cart is empty</p>
          <p className="text-gray-400 mt-2">Start adding some products!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {cartItems.map((product) => (
                <div 
                  key={product.id} 
                  className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full md:w-32 h-32 object-contain bg-gray-50 p-2 rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mt-1">
                        {product.description}
                      </p>
                      <div className="mt-4 flex justify-between items-center">
                        <p className="text-xl font-bold text-gray-900">
                          ${product.price.toFixed(2)}
                        </p>
                        <div className="flex items-center gap-4">
                          {/* Quantity Input Number */}
                          <div className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg">
                            <div className="flex items-center gap-x-1.5">
                              <button 
                                type="button" 
                                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" 
                                onClick={() => handleDecreaseQuantity(product.id)}
                                aria-label="Decrease"
                              >
                                <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 12h14"></path>
                                </svg>
                              </button>
                              <input 
                                className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" 
                                style={{ MozAppearance: "textfield" }} 
                                type="number" 
                                value={product.quantity || 1}
                                readOnly
                                aria-roledescription="Number field" 
                              />
                              <button 
                                type="button" 
                                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" 
                                onClick={() => handleIncreaseQuantity(product.id)}
                                aria-label="Increase"
                              >
                                <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          {/* End Quantity Input Number */}
                          <button
                            className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
                            onClick={() => handleRemoveFromCart(product.id)}
                            aria-label={`Remove ${product.title} from cart`}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-6 rounded-lg border h-fit sticky top-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="border-t border-gray-200 my-2"></div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button
              className="w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              onClick={onCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;