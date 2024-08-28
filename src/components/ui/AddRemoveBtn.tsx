"use client";
import React, { useEffect, useState } from "react";
import { cartType } from "../../../type";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shofySlice";

interface propsType {
  item: cartType;
}

const AddRemoveBtn = ({ item }: propsType) => {
  const { product, quantity } = item;
  const [isDisable, setIsDisable] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (quantity < 2) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [quantity]);

  function addProduct() {
    dispatch(addToCart({ product, quantity: 1 }));
  }

  function removeProduct() {
    dispatch(addToCart({ product, quantity: -1 }));
  }
  return (
    <div className="flex justify-start ">
      {" "}
      <button
        onClick={addProduct}
        className="border py-1 mx-1 border-slate-500 bg-gray-100 text-black font-semibold rounded-md px-4 hover:bg-gray-300 duration-300"
      >
        +
      </button>{" "}
      <button
        disabled={isDisable}
        onClick={removeProduct}
        className={`border py-1 mx-1 border-slate-500  text-black font-semibold rounded-md px-4 hover:bg-gray-300 duration-300 ${
          isDisable ? "bg-gray-500 " : "bg-gray-100  "
        }`}
      >
        -
      </button>
    </div>
  );
};

export default AddRemoveBtn;
