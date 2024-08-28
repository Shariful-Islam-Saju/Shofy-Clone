"use client";
import React from "react";
import { ProductType, StateType } from "../../type";
import Image from "next/image";
import { MdFavoriteBorder, MdStar } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import Button from "./ui/Button";
import AddToCartButton from "./AddToCartButton";
import SideBar from "./Sidebar";
import { useSelector } from "react-redux";
import AddRemoveBtn from "./ui/AddRemoveBtn";

interface Props {
  product: ProductType;
}

const ProductCard = ({ product }: Props) => {
  const { cart } = useSelector((state: StateType) => state?.shopy);

  const existingProduct = cart?.find(
    (item) => item?.product?.id === product?.id
  );

  return (
    <div className="border border-borderColor hover:shadow-lg hover:shadow-black/30 duration-300 rounded-md group overflow-hidden">
      <div className=" relative">
        <Image
          src={product?.images[0]}
          alt="product-image"
          width={500}
          height={500}
          className="w-full h-64 object-contain hover:scale-110 duration-300"
        />
        <p className="absolute top-2 right-2 bg-orange-600 text-white py-1 px-2 text-xs rounded-lg flex items-center">
          {product?.rating}
          <MdStar />
        </p>
        <SideBar />
      </div>
      <div className="border-t border-t-borderColor py-2 px-4 flex flex-col justify-between h-40">
        <div className="flex flex-col ">
          <p className="text-sm text-lightText capitalize font-medium">
            {product?.category}
          </p>

          <h2 className="font-semibold text-base line-clamp-2">
            {product?.title}
          </h2>
          <p className="font-semibold text-skyColor">${product?.price}</p>
        </div>
        {existingProduct ? (
          <div className="flex justify-between pb-3">
            {" "}
            <AddRemoveBtn item={existingProduct} />{" "}
            <p className=" font-bold text-2xl">{existingProduct.quantity}</p>
          </div>
        ) : (
          <AddToCartButton product={product} />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
