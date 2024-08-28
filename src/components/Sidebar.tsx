import { FiShoppingCart } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="absolute right-2 bottom-12 border flex flex-col text-2xl border-borderColor bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300">
      <button className="p-2 hover:bg-skyColor duration-300 hover:text-white">
        <FiShoppingCart />
      </button>
      <button className="p-2 hover:bg-skyColor duration-300 hover:text-white border-y border-y-borderColor">
        <LuEye />
      </button>
      <button className="p-2 hover:bg-skyColor duration-300 hover:text-white">
        <MdFavoriteBorder />
      </button>
    </div>
  );
};

export default SideBar
