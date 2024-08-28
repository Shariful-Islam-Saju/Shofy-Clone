"use client";

import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../../type";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import AddRemoveBtn from "../ui/AddRemoveBtn";
import { removeToCart } from "@/redux/shofySlice";
import { BiTrash } from "react-icons/bi";

const CartProducts = () => {
  const { cart } = useSelector((state: StateType) => state?.shopy);
  const dispatch = useDispatch();

  function handleDelete(id: string | number, title: string) {
    dispatch(removeToCart({ id, title }));
  }
  return (
    <div className="w-full">
      {cart?.map((item) => {
        const { id, title, price } = item.product;
        return (
          <div key={id} className="grid grid-cols-7 place-items-center">
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
              className="flex items-center gap-x-1 text-gray-500 hover:text-red-500"
            >
              <BiTrash className="text-3xl " />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CartProducts;
