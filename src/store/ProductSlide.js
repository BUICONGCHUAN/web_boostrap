import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: []
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log("action", action.payload);
      state.productList = [...state.productList, action.payload];
    },
    removeProduct: (state, action) => {
      console.log("action" ,action.payload);
      state.productList = state.productList.filter(el => el.id !== action.payload.id)
    }
    // removeTask: (state, action) => {
    //   console.log("action", action.payload);
    //   // do something here
    // }
     
  }
});

export const { addProduct,removeProduct } = productSlice.actions;

export default productSlice.reducer;