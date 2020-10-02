import React from "react";
import { Container, Prompt } from "./checkout-sidebar-styles";

export default class CheckoutSidebar extends React.PureComponent {
  render() {
    return (
      <Container>
        <img src="/checkout-zero.svg" alt="empty checkout" />
        <Prompt>Your cart is empty</Prompt>
        <Prompt>Add items to get started</Prompt>
      </Container>
    );
  }
}
