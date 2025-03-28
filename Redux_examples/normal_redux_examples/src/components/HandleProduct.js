import React from 'react';

const HandleProducts = () => {
  return (
   <div className="flex justify-center mt-8 space-x-4">
      <button 
        className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600 focus:outline-none"
        onClick={handleSetProducts}
      >
        Set Products
      </button>
      <button 
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
        onClick={handleSelectedProducts}
      >
        Select Products
      </button>
      <button 
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
        onClick={handleRemovedSelectedProducts}
      >
        Remove Selected Products
      </button>
    </div>
  );
}

export default HandleProducts;
