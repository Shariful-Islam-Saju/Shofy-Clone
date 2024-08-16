"use client";

const AddToCartButton = () => {
  return (
    <button
      onClick={() => window.alert("hello")}
      className="bg-transparent border border-skyColor text-black rounded-full py-1.5 hover:bg-skyColor hover:text-white duration-300 my-2"
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
