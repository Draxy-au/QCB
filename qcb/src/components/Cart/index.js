import Image from "next/image";
import styles from "./Cart.module.scss";

import cart_icon from "@assets/icons/cart.svg";

export default function Cart({ total_price }) {
  return (
    <div className={styles.cart}>
      Total: ${`${Number(total_price).toFixed(2)}`}
      <Image height={"30px"} width={"30px"} src={cart_icon} alt="cart" />
    </div>
  );
}
