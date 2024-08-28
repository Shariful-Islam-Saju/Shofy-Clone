"use client";
import Container from "../Container";
import Image from "next/image";
import { RiSearchLine, RiCloseLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { LiaUser } from "react-icons/lia";
import { MdFavoriteBorder } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";
import Link from "next/link";
import logo from "../../assets/logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { signIn, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "@/redux/shofySlice";
import { ProductType, StateType } from "../../../type";

const MiddleHeader = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: StateType) => state?.shopy);
  const totalQuantity = cart.reduce(
    (sum: any, item: { quantity: any }) => sum + item.quantity,
    0
  );
  const { data: session } = useSession();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (session?.user) {
      dispatch(addUser(session?.user));
    } else {
      dispatch(removeUser());
    }
  }, [session?.user, dispatch]);

  return (
    <div className="border-b-[1px] border-b-gray-400">
      <Container className="py-5 flex items-center gap-4 md:gap-6 lg:gap-20 justify-between ">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-28" />
        </Link>
        <div className="hidden md:inline-flex flex-1 h-10 relative">
          <input
            type="text"
            placeholder="Search products here..."
            className="w-full h-full outline-none border-2 border-themeColor px-4"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          {searchValue && (
            <RiCloseLine
              onClick={() => setSearchValue("")}
              className="text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200"
            />
          )}

          <span className="w-10 h-10 bg-themeColor/80 inline-flex items-center justify-center text-white absolute top-0 right-0 border border-themeColor hover:bg-themeColor duration-200 cursor-pointer">
            <RiSearchLine />
          </span>
        </div>
        <div className="hidden md:inline-flex items-center gap-3">
          {/* User */}
          {session?.user ? (
            <Link
              href={"/profile"}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="border-2 w-10 h-10 border-gray-700  rounded-full text-xl">
                <Image
                  src={session?.user?.image!}
                  alt="userImage"
                  width={200}
                  height={200}
                  className="  w-full rounded-full h-full "
                />
              </div>
              <div>
                <p className="text-xs">Hello, {session?.user?.name}</p>
                <Link href={"/profile"} className="text-sm">
                  view profile
                </Link>
              </div>
            </Link>
          ) : (
            <div
              onClick={() => signIn()}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="border-2 border-gray-700 p-1.5 rounded-full text-xl">
                <LiaUser />
              </div>
              <div>
                <p className="text-xs">Hello, Guests</p>
                <p className="text-sm">Login / Register</p>
              </div>
            </div>
          )}
          {/* Favorite Icon */}
          <Link href={"/favorite"} className="text-2xl relative">
            <MdFavoriteBorder />
            <span className="absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-themeColor text-white rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
          {/* Cart Icon */}
          <Link href="/cart" className="text-2xl relative">
            <BiShoppingBag />
            <span className="absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-themeColor text-white rounded-full flex items-center justify-center">
              {totalQuantity}
            </span>
          </Link>
        </div>
        <div className="text-3xl md:hidden text-gray-500 hover:text-themeColor duration-200 cursor-pointer">
          <RiMenu3Fill />
        </div>
      </Container>
    </div>
  );
};

export default MiddleHeader;
