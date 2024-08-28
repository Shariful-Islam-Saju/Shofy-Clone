"use client";

import { addToCart } from "@/redux/shofySlice";
import { useDispatch } from "react-redux";
import { ProductType } from "../../type";
import toast, { Toaster } from "react-hot-toast";
interface PropsType {
  product?: ProductType;
}

const AddToCartButton = ({ product }: PropsType) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ product, quantity: 1 }));
   
    }
  };
  return (
    <>
      <button
        onClick={handleAddToCart}
        className="bg-transparent border border-skyColor text-black rounded-full py-1.5 hover:bg-skyColor hover:text-white duration-300 my-2"
      >
        Add to cart
      </button>
    </>
  );
};

export default AddToCartButton;
