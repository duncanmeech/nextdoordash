import React from "react";
import styles from "./checkout-sidebar.module.scss";

export default class CheckoutSidebar extends React.PureComponent {
  render() {
    return (
      <div className={styles.checkoutSidebar}>
        <img src="/checkout-zero.svg" alt="empty checkout" />
        <div className={styles.prompt}>Your cart is empty</div>
        <div className={styles.prompt}>Add items to get started</div>
      </div>
    );
  }
}
