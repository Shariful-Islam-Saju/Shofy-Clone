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
    <div className="flex items-center space-x-4 border border-gray-300 rounded-full px-4 py-1">
      {" "}
      <button
        onClick={addProduct}
        className="text-lg font-semibold text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        +
      </button>{" "}
      <button
        disabled={isDisable}
        onClick={removeProduct}
        className={`text-lg font-semibold text-gray-600 hover:text-gray-800 focus:outline-none${
          isDisable ? "bg-gray-500 " : " "
        }`}
      >
        -
      </button>
    </div>
  );
};

export default AddRemoveBtn;


