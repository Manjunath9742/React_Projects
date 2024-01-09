import  {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import product_Slice from './product_Slice';
const store=configureStore({
    reducer:{
        cart:cartSlice,
        products:product_Slice


    }
});

export default store;