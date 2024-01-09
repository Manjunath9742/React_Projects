import { createSlice  } from '@reduxjs/toolkit';
const initialState = {
    data:[],
}

const product_Slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   fetchProducts(state,action){
       state.data=action.payload;
   }
},
}
);

export const {fetchProducts} = product_Slice.actions;
export default product_Slice.reducer; // Use 'reducer' instead of the entire slice





export function getProducts(){
    return async function getProductThunk(dispatch,getState){
      const data= await fetch("https://fakestoreapi.com/products");
      const result= await data.json();
       dispatch(fetchProducts(result));
    }
}
