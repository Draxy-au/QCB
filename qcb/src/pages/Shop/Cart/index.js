import Navbar from "@components/Navbar";
import { useCart } from "react-use-cart";

import styles from "./Cart.module.scss";

export default function Cart() {
  const { items } = useCart();
  return (
    <div className={styles.cart_page_container}>
      <Navbar current={"Shop"} />
      <div suppressHydrationWarning>{JSON.stringify(items)}</div>
    </div>
  );
}
