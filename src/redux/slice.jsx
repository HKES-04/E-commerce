import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(function (item) {
        return item._id === action.payload._id;
      });

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(function (item) {
        return item._id !== action.payload;
      });
    },
    resetCart: (state) => {
      state.productData = [];
    },
    increamentQuantity: (state, action) => {
      const item = state.productData.find(function (item) {
        return item._id === action.payload._id;
      });
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.productData.find(function (item) {
        return item._id === action.payload._id;
      });
      if (item.quantity <= 0) {
        return;
      } else {
        item.quantity--;
      }
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  increamentQuantity,
  decrementQuantity,
  addUser,
  removeUser,
} = slice.actions;
export default slice.reducer;
