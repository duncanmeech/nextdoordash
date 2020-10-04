import React from "react";
import { Container, Prompt } from "./checkout-sidebar-styles";
import useCartQuery from "./useCartQuery";

export default function CheckoutSidebar() {
  const cartRes = useCartQuery({
    skipQuery: false,
  });

  console.log(cartRes);

  return (
    <Container>
      <img src="/checkout-zero.svg" alt="empty checkout" />
      <Prompt>Your cart is empty</Prompt>
      <Prompt>Add items to get started</Prompt>
    </Container>
  );
}
