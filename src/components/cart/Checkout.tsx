"use client";
// components/CheckoutSummary.js
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../../type";
import Link from "next/link";
const CheckoutSummary = () => {
  const [totalValue, setTotalValue] = useState(0);
  const cart = useSelector((state: StateType) => state.shopy.cart);
  useEffect(() => {
    setTotalValue(0);
    cart.forEach((item) => {
      let sum = item.quantity * item.product.price;
      setTotalValue((prv) => prv + sum);
    });
  }, [cart]);
  const tax = totalValue * 0.05;
  const taxAndTotal = totalValue + tax;
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm min-w-72">
      <div className="mb-4">
        <div className="flex justify-between text-lg font-medium">
          <span>Subtotal</span>
          <span>${totalValue.toFixed(2)}</span>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between text-lg font-medium">
          <span>
            Tax <span className="text-gray-600 text-sm">( 5% )</span>
          </span>
          <span>${tax.toFixed(2)}</span>
        </div>
      </div>
      <hr className="mb-4" />
      <div className="mb-4">
        <div className="flex justify-between text-lg font-semibold mb-4">
          <span>Total</span>
          <span>${taxAndTotal.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-500">(Shipping fees not included)</p>
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Proceed to Checkout
      </button>
      <Link
        href="#"
        className="block text-center text-blue-500 mt-4 hover:underline"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default CheckoutSummary;
