import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actionTypes } from '../redux/constants/action-types';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFilterBox, setShowFilterBox] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      dispatch({
        type: actionTypes.SET_PRODUCTS,
        payload: response.data
      });
    } catch (error) {
      console.error('Error fetching products:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: product
    });
  };

  const handleSearch = () => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    
    // Add to search history if not empty and not already in history
    if (searchTerm.trim() && !searchHistory.includes(searchTerm.trim())) {
      setSearchHistory(prev => [searchTerm.trim(), ...prev].slice(0, 5));
    }
    setSearchTerm(''); // Clear search input after search
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setFilteredProducts(products);
    searchHistory.length = 0; // Clear search history
    setShowFilterBox(false); // Hide filter box after clearing
  };

  const handleHistoryItemClick = (term) => {
    console.log("term2332", term)
    setSearchTerm(term);
    handleSearch(); // Trigger search immediately when clicking history item
  };

  if (loading) return <div className="p-4">Loading products...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    
    <div>
    
      {/* Filter Button */}
      <button
        onClick={() => setShowFilterBox(!showFilterBox)}
        className="m-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        {showFilterBox ? 'Hide Filters' : 'Show Filters'}
      </button>

      {/* Filter Box - Conditionally rendered */}
      {showFilterBox && (
        <div className="w-full bg-white border border-gray-300 shadow-lg p-6 mb-4">
          <div className="flex flex-col space-y-4">
            {/* Search Input */}
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onkeydown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button 
                onClick={handleSearch}
                className="ml-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Search
              </button>
            </div>

            {/* Search History */}
            {searchHistory.length > 0 && (
              <div className="mt-2">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Recent Searches:</h4>
                <div className="flex flex-wrap gap-2">
                  {searchHistory.map((term, index) => (
                    <div 
                      key={index} 
                      className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      
                      <span 
                      className="cursor-pointer hover:text-blue-600 mr-1"
                      onClick={() => {
                      setSearchTerm(term);
                      handleSearch(); // Auto-search when clicked
            }}
          >
            {term}
          </span>
          
          <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSearchHistory(prev => prev.filter((_, i) => i !== index));
                        }}
                        className="text-gray-500 hover:text-red-500 mr-1"
                        aria-label="Delete search term"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={handleClearFilters}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-48 object-contain mb-4 bg-gray-50 p-2 rounded"
            />
            <h2 className="text-lg font-semibold line-clamp-1">{product.title}</h2>
            <p className="text-gray-600 text-sm line-clamp-2 mb-3">{product.description}</p>
            <div className="flex justify-between items-center mt-auto">
              <p className="text-xl font-bold text-gray-900">${product.price}</p>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;