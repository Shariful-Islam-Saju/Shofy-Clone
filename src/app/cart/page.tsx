import CartProducts from "@/components/cart/CartProducts";
import CheckoutSummary from "@/components/cart/Checkout";
import Container from "@/components/Container";
import React from "react";

const CartPage = () => {
  return (
    <Container className="py-10 flex items-start justify-between gap-x-10">
      <CartProducts />
      <CheckoutSummary />
    </Container>
  );
};

export default CartPage;
