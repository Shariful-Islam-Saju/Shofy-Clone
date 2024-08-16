import React from "react";
import Container from "../Container";
import Link from "next/link";
import { navigation } from "@/constants";

const BottomHeader = () => {
  return (
    <div className="border-b border-b-gray-400">
      <Container className="flex items-center justify-between py-1">
        <div className="text-xs md:text-sm font-medium flex items-center gap-5">
          {navigation?.map((item) => (
            <Link key={item?.title} href={item?.href}>
              {item?.title}
            </Link>
          ))}
        </div>
        <p className="text-xs text-gray-400 font-medium hidden md:inline-flex">
          Hotline: <span className="text-black">+88 01012345678</span>
        </p>
      </Container>
    </div>
  );
};

export default BottomHeader;
