import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../type";
import toast from "react-hot-toast";

interface cartType {
  product: ProductType;
  quantity: number;
}

interface InitialState {
  cart: cartType[];
  userInfo: any;
}

const initialState: InitialState = {
  cart: [],
  userInfo: null,
};

export const shofySlice = createSlice({
  name: "shofy",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingProduct = state?.cart?.find(
        (item) => item?.product?.id === action.payload?.product?.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
        toast.success(
          `${existingProduct.product.title.substring(
            0,
            10
          )}... Update SuccessFully`
        );
      } else {
        toast.success(
          `${action?.payload?.product?.title.substring(
            0,
            10
          )}... added successfully!`
        );
        state.cart.push(action.payload);
      }
    },

    removeToCart(state, action) {
      toast.success(
        `${action?.payload?.title.substring(0, 10)}... Remove successfully!`
      );

      state.cart = state.cart.filter(
        (item) => item?.product.id !== action.payload.id
      );
    },

    addUser(state, action) {
      state.userInfo = action.payload;
    },
    removeUser(state) {
      state.userInfo = null;
    },
  },
});
export const { addToCart, addUser, removeUser, removeToCart } =
  shofySlice.actions;
export default shofySlice.reducer;
