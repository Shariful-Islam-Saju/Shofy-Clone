"use client";

import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../../type";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import AddRemoveBtn from "../ui/AddRemoveBtn";
import { removeToCart } from "@/redux/shofySlice";
import { BiTrash } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";

const CartProducts = () => {
  const { cart } = useSelector((state: StateType) => state?.shopy);
  const dispatch = useDispatch();

  function handleDelete(id: string | number, title: string) {
    dispatch(removeToCart({ id, title }));
  }
  return (
    <div className="w-full">
      {cart.length > 0 ? (
        cart.map((item) => {
          const { id, title, price } = item.product;
          return (
            <div
              key={id}
              className="grid grid-cols-7 mb-4  bg-red-50 place-items-center"
            >
              <Image
                src={item?.product?.images[0]}
                alt="productImage"
                className="w-20"
                width={200}
                height={200}
              />
              <p className=" col-span-2">{title}</p>
              <p className="font-semibold text-1xl">{item.quantity}</p>
              <p>${(price * item.quantity).toFixed(2)}</p>

              <div>
                <AddRemoveBtn item={item} />
              </div>
              <button
                onClick={() => {
                  handleDelete(id, title);
                }}
              >
                <FaTrash className="text-2xl  text-gray-700 hover:text-gray-950 duration-300" />
              </button>
            </div>
          );
        })
      ) : (
        <div className="flex mt-20 font-bold text-4xl justify-center items-center">
          No Product Available
        </div>
      )}
    </div>
  );
};

export default CartProducts;
