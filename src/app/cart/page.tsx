import CartProducts from "@/components/cart/CartProducts";
import Container from "@/components/Container";
import React from "react";

const CartPage = () => {
  return (
    <Container className="py-10 flex items-start justify-between gap-x-20">
      <CartProducts />
      <div>Checkout Details</div>
    </Container>
  );
};

export default CartPage;
